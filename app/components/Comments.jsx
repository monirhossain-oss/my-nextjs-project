import React from 'react'

export default async function Comments({commentsPromise}) {
    const comments = await commentsPromise;
    return (
        <div>
            <ul >
                {
                    comments.map(comment => <li className='mb-4' key={comment.id}>{comment.body}</li>)
                }
            </ul>
        </div>
    )
}
