import { createBrowserClient } from '@supabase/ssr';

const createClient = () => {
  return createBrowserClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );
};

const supabase = createClient();

export default supabase;
