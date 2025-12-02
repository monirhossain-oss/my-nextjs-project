import Comments from '@/app/components/Comments';
import getAllComments from '@/lib/getAllComments';
import getPost from '@/lib/getPost';
import React, { Suspense } from 'react'

export default async function postPage({ params }) {
    const { id } = await params;
    const postPromise = getPost(id);
    const commentsPromise = getAllComments(id);
    const post = await postPromise;
    return (
        <div>
            <h2 className='text-xl mt-8'>{post.title}</h2>
            <p className='mt-2 text-green-500'>{post.body}</p>

            <Suspense fallback="Loading...">
                <Comments commentsPromise={commentsPromise}></Comments>
            </Suspense>
        </div>
    )
}
