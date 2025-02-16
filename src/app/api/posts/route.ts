import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/clients';

export async function GET() {
  try {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Unexpected error in GET:', error);
    return NextResponse.json(
      { error: 'Error fetching posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, image_url } = body;

    // Vérification des champs obligatoires
    if (!title || !content || !image_url) {
      return NextResponse.json(
        { error: 'Title, content, and image_url are required' },
        { status: 400 }
      );
    }

    const supabase = createClient();
    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, content, image_url }])
      .select()
      .single();

    if (error) {
      console.error('Error inserting post:', error);
      throw new Error('Failed to create post');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Unexpected error in POST:', error);
    return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
  }
}
