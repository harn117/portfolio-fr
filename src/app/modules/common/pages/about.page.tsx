import React from "react";

interface AboutPageProps {
    children: React.ReactNode;
}

export default function AboutPage({ children }: AboutPageProps) {
    return (
        <main className="flex flex-col w-3/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
            {children}
        </main>
    )
}