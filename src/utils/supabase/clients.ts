import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** `false` quand les variables d'environnement Supabase sont absentes. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const offlineError = {
  message:
    "Supabase n'est pas configuré : renseignez NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY.",
  details: '',
  hint: '',
  code: 'SUPABASE_NOT_CONFIGURED',
};

type OfflineResult = { data: unknown; error: unknown };

const readResult: OfflineResult = { data: [], error: null };
const writeResult: OfflineResult = { data: null, error: offlineError };

/**
 * Query builder inerte : chaque méthode reste chaînable et l'objet est
 * « thenable », donc `await supabase.from('posts').select('*')` résout
 * une liste vide au lieu de planter.
 */
function offlineQuery(result: OfflineResult) {
  const query = {
    select: () => offlineQuery(result),
    eq: () => offlineQuery(result),
    order: () => offlineQuery(result),
    limit: () => offlineQuery(result),
    insert: () => offlineQuery(writeResult),
    update: () => offlineQuery(writeResult),
    delete: () => offlineQuery(writeResult),
    single: () => offlineQuery({ data: null, error: result.error }),
    maybeSingle: () => offlineQuery({ data: null, error: result.error }),
    then: (resolve: (value: OfflineResult) => unknown) => resolve(result),
  };

  return query;
}

function createOfflineClient() {
  return {
    from: () => offlineQuery(readResult),
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithPassword: async () => ({
        data: { user: null, session: null },
        error: offlineError,
      }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
    },
    storage: {
      from: () => ({
        upload: async () => ({ data: null, error: offlineError }),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
        remove: async () => ({ data: null, error: offlineError }),
      }),
    },
  } as unknown as SupabaseClient;
}

const createClient = () => {
  if (!isSupabaseConfigured) {
    console.warn(
      "[supabase] Variables d'environnement manquantes — mode hors ligne : les articles ne sont ni chargés ni enregistrés."
    );
    return createOfflineClient();
  }

  return createBrowserClient(supabaseUrl!, supabaseAnonKey!);
};

const supabase = createClient();

export default supabase;
