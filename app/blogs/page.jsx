import Link from 'next/link'
import React from 'react'
const blogsData = [
    {
        id: 1,
        title: "Digital Transformation",
        description: "Empowering businesses through modern technology solutions",
        priority: "High",
        tags: ["tech", "business", "future"],
        isPublic: true
    },
    {
        id: 2,
        title: "Global Accessibility",
        description: "Making services reachable for users worldwide",
        priority: "Medium",
        tags: ["global", "users", "service"],
        isPublic: false
    },
    {
        id: 3,
        title: "Sustainable Innovation",
        description: "Innovating responsibly with long-term environmental focus",
        priority: "Low",
        tags: ["sustainable", "innovation", "eco"],
        isPublic: true
    },
    {
        id: 4,
        title: "Customer Centric Design",
        description: "Designing products based on user needs and feedback",
        priority: "High",
        tags: ["uiux", "design", "customer"],
        isPublic: true
    },
    {
        id: 5,
        title: "Security First Approach",
        description: "Ensuring data protection and system reliability",
        priority: "Critical",
        tags: ["security", "data", "reliability"],
        isPublic: false
    }
]

export default function Blogs() {
    return (
        <div>
            <div>
                <h2 className='my-8'>this is blogs page </h2>
                {
                    blogsData.map(blog => (
                        <li key={blog.id}>
                            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                        </li>
                    ))
                }
            </div>
            <div>
                
            </div>
        </div>
    )
}
