import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/utils/supabase/clients';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: 'Missing post ID' }, { status: 400 });
    }

    // Récupérer l'URL de l'image avant la suppression
    const { data: post, error: fetchError } = await supabase
      .from('posts')
      .select('image_url')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error('Error fetching post:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch post' },
        { status: 500 }
      );
    }

    if (post?.image_url) {
      // Extract filename from the URL
      const fileName = post.image_url.split('/').pop();
      if (fileName) {
        // Supprimer l'image du storage
        const { error: storageError } = await supabase.storage
          .from('posts-images')
          .remove([fileName]);

        if (storageError) {
          console.error('Error deleting image from storage:', storageError);
          // Continue with post deletion even if image deletion fails
          console.warn(
            'Continuing with post deletion despite image deletion failure'
          );
        }
      }
    }

    // Supprimer le post
    const { error: deleteError } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (deleteError) {
      console.error('Error deleting post:', deleteError);
      return NextResponse.json(
        { error: 'Failed to delete post' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
