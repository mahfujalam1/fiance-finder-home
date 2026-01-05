"use client"

import { LoginModal } from "@/components/Modal/LogigModal"
import Link from "next/link"

export function Navbar() {
    return (
        <div className="fixed top-8 left-0 right-0 z-50 bg-black/50 px-4 py-4 backdrop-blur-sm md:px-8">
            <nav className="container mx-auto flex items-center justify-between">
                <Link href="/" className="font-logo text-3xl text-white">
                    {process.env.NEXT_PUBLIC_PROJECT_NAME || "LOGO"}
                </Link>
                <div className="flex items-center gap-8 text-white">
                    <Link href="/" className="hover:underline">
                        Help
                    </Link>
                    <LoginModal>
                        <button className="cursor-pointer hover:underline">Login</button>
                    </LoginModal>
                </div>
            </nav>
        </div>
    )
}
