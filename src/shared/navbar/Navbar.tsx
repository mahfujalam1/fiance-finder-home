import Link from "next/link"

export function Navbar() {
    return (
        <div className="left-0 right-0 z-10 fixed top-8 bg-black/50 py-4 px-4 md:px-8 ">
            <nav className="container mx-auto flex justify-between items-center">
                <Link href="/" className="font-logo text-3xl text-white">
                    Fiance Finder
                </Link>
                <div className="flex items-center gap-8 text-white">
                    <Link href="/help" className="hover:underline">
                        Help
                    </Link>
                    <Link href="/login" className="hover:underline">
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}
