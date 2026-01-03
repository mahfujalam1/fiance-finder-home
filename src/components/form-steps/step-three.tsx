import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormSelect } from "@/components/form-select"
import { PHONE_CODES } from "@/lib/form-options"
import type { UseFormReturn } from "react-hook-form"

export function StepThree({ form }: { form: UseFormReturn<any> }) {
    return (
        <div className="space-y-4 animate-in fade-in duration-300">
            <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Mobile Number</label>
                <div className="flex gap-2">
                    <div className="w-1/2.5">
                        <FormSelect name="phoneCode" placeholder="+880" options={PHONE_CODES} form={form} />
                    </div>
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="flex-1 space-y-0">
                                <FormControl>
                                    <Input {...field} placeholder="Write number here" className="h-10 shadow-sm" />
                                </FormControl>
                                <FormMessage className="text-[10px]" />
                            </FormItem>
                        )}
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="space-y-0">
                            <FormControl>
                                <Input {...field} placeholder="Write email here" className="h-10 shadow-sm" />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="space-y-0">
                            <FormControl>
                                <Input {...field} type="password" placeholder="Write password here" className="h-10 shadow-sm" />
                            </FormControl>
                            <FormMessage className="text-[10px]" />
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}
