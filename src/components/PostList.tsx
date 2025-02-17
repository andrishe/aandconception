import { Posts } from '@/types/posts';
import React from 'react';
import Image from 'next/image';

type PostListProps = {
  posts: Posts[];
  handleDelete: (id: number) => void;
};

const PostList = ({ posts, handleDelete }: PostListProps) => {
  return (
    <div className="px-40 mb-20 ">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {post.title}
            </h2>

            <div className="mb-4">
              <Image
                src={post.image_url}
                alt={post.title}
                width={200}
                height={200}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <p className="text-gray-700 mb-4">{post.content}</p>

            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
