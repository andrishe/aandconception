import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/clients';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: 'Missing post ID' }, { status: 400 });
    }

    const supabase = createClient();

    // Récupérer l'URL de l'image avant la suppression
    const { data: post, error: fetchError } = await supabase
      .from('posts')
      .select('image_url')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error('Error fetching post:', fetchError);
      throw new Error('Failed to fetch post');
    }

    if (post?.image_url) {
      // Supprimer l'image du storage
      const fileName = post.image_url.split('/').pop();
      const { error: storageError } = await supabase.storage
        .from('posts-images')
        .remove([fileName]);

      if (storageError) {
        console.error('Error deleting image from storage:', storageError);
        throw new Error('Failed to delete image');
      }
    }

    // Supprimer le post
    const { error: deleteError } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting post:', deleteError);
      throw new Error('Failed to delete post');
    }

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Error deleting post' }, { status: 500 });
  }
}
