"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import toast from "react-hot-toast"

export const LoginModal = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success("Successfully logged in!")
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-none p-8">
                <DialogHeader className="space-y-4">
                    <DialogTitle className="text-center text-2xl font-bold text-primary tracking-wider uppercase">
                        Welcome User
                    </DialogTitle>
                    <div className="relative h-px w-full bg-gray-200">
                        <div className="absolute top-0 left-1/2 h-1 w-24 -translate-x-1/2 -translate-y-[1.5px] bg-primary" />
                    </div>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-semibold">
                                Email / Mobile Number
                            </Label>
                            <Input
                                id="email"
                                placeholder="Enter Email"
                                className="h-12 border-none bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] placeholder:text-gray-400"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" id="password" className="text-sm font-semibold">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                className="h-12 border-none bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] placeholder:text-gray-400"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-1">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm font-medium leading-none text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember me
                            </label>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-sm font-medium text-primary hover:no-underline">
                            Forgot Password
                        </Button>
                    </div>
                    <div className="flex justify-center pt-2">
                        <Button type="submit" className="h-11 w-32 btn">
                            Login
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
