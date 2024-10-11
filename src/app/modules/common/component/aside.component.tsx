import React from "react";
import Image from "next/image";

export default function AsideComponent() {
    return (
        <aside className="flex flex-col w-1/4 px-4 py-5 bg-neutral-900 my-20 rounded-lg">
        <div className="flex flex-col gap-5 items-center h-1/2">
            <div className="bg-neutral-800 rounded-md p-3">
                <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </div>
            <h1 className="text-white text-2xl font-bold">Holman David Neira Pinzón</h1>
            <span className="bg-neutral-700 rounded-lg p-2">
                <h2 className="text-white text-sm">Full Stack Developer</h2>
            </span>
        </div>
        <div className="flex flex-col items-center gap-5 h-1/2">
            <div className="flex gap-2 w-full">
                <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg">
                    <Image src="" alt="icono" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white uppercase">Email</h1>
                    <p className="text-neutral-400 text-xs">davidneirap@gmail.com</p>
                </div>
            </div>
        </div>
      </aside>
    )
}