"use client"

import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { UseFormReturn } from "react-hook-form"

interface FormSelectProps {
    name: string
    placeholder: string
    options: { label: string; value: string }[]
    form: UseFormReturn<any>
}

export function FormSelect({ name, placeholder, options, form }: FormSelectProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                return <FormItem className="w-full space-y-0">
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className={`h-10 ${field?.name === "phoneCode" ? 'w-23' : "w-35"} shadow-sm`}>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {options.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage className="text-[10px]" />
                </FormItem>
            }}
        />
    )
}
