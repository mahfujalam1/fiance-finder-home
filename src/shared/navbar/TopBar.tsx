import { Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function TopBar() {
    return (
        <div className="fixed w-full bg-linear-to-r from-[#E6EBF6] via-[#B1CCED] to-[#E6EBF6] text-black z-10 py-2 px-4 md:px-8">
            <div className=" container mx-auto  flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <Link href="mailto:info@fiancefinder.com" className="hover:underline">
                        info@fiancefinder.com
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="#" className="hover:opacity-80">
                        <Instagram className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                        <Facebook className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="hover:opacity-80">
                        <div className="h-4 w-4 flex items-center justify-center border border-white rounded-full text-[10px] font-bold">
                            G
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
