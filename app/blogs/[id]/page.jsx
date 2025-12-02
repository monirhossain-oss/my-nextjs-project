import { notFound } from "next/navigation";
import React from "react";

export default async function BlogPage({ params }) {
    const { id } = await params;

    if (id >= "6") {
        notFound();
    }

    return (
        <div>
            <h2>The blog number is {id}</h2>
        </div>
    );
}
