import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContactUs() {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-24">
            <div>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left: Contact Form (50%) */}
                    <div className="md:w-xl mx-auto px-4">
                        <div className="mb-8">
                            <h2 className="inline-block border-b-2 border-primary pb-1 text-2xl font-medium text-primary">
                                Contact Us
                            </h2>
                            <div className="mt-[-1px] h-[1px] w-full bg-primary/20" />
                        </div>

                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] outline-none focus:shadow-[0_4px_25px_rgba(0,0,0,0.12)]"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] outline-none focus:shadow-[0_4px_25px_rgba(0,0,0,0.12)]"
                            />

                            <textarea
                                placeholder="Write Here...."
                                rows={6}
                                className="w-full resize-none rounded-md bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] outline-none focus:shadow-[0_4px_25px_rgba(0,0,0,0.12)]"
                            />

                            <Button className="btn w-40 py-6">
                                SEND
                            </Button>
                        </form>
                    </div>

                    {/* Right: Background + Phone Image (50%) */}
                    <div
                        className="relative flex h-[350px] items-center justify-center md:h-[450px] lg:h-[520px]"
                        style={{
                            backgroundImage: "url('/contact/contactBg1.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "end",
                        }}
                    >
                        {/* Foreground Phone */}
                        <Image
                            src="/contact/phone.png"
                            alt="Hand holding phone"
                            width={280}
                            height={560}
                            className="relative z-10 object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
