"use client"

import { LoginModal } from "@/components/Modal/LogigModal"
import Link from "next/link"

export function Navbar() {
    return (
        <div className="fixed left-0 right-0 z-50 bg-linear-to-r from-[#E6EBF6] via-[#B1CCED] to-[#E6EBF6] px-4 py-4 backdrop-blur-sm md:px-8">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="font-bold text-3xl text-primary">
                    {process.env.NEXT_PUBLIC_PROJECT_NAME || "LOGO"}
                </Link>
                <div className="flex items-center gap-8 text-gray-700">
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
