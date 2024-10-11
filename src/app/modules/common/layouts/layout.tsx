"use client"
import React from "react";
import Link from "next/link";
import AsideComponent from "../component/aside.component";
import { usePathname } from "next/navigation";
import useNavigation from "../hooks/useNavigation";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname();
    const { title, routes } = useNavigation(pathname);

  return (
    <main className="bg-neutral-950 px-20 h-screen flex gap-5">
      <AsideComponent />
      <section className="flex flex-col w-3/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg relative">
        <header className="flex justify-between">
           <h1 className="text-white text-3xl font-bold mb-3">{title}</h1>
           <nav className="absolute right-0 top-0 px-10 py-4 bg-neutral-800 rounded-b border-l border-neutral-700">
            <ul className="flex gap-5">
                {
                    routes.map((route) => (
                        <Link key={route.path} className={ `${pathname === route.path ? "text-yellow-200" : "text-neutral-300"} font-semibold capitalize`} href={route.path}>{route.name}</Link>
                    ))
                }
            </ul>
           </nav>
        </header>
        {children}
      </section>
    </main>
  );
}
