import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts)
    return (
        <div>
            <h2 className="mt-8 text-xl text-green-500">
                There is all number of Posts {posts.length}
            </h2>
            <h3 className='mt-8 text-lg font-bold'>
                <ul>
                    {
                        posts.map(post => <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>)
                    }
                </ul>
            </h3>
        </div>
    )
}
