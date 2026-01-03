import { FormSelect } from "@/components/form-select"
import { PROFILE_FOR_OPTIONS, CITY_OPTIONS, EDUCATION_OPTIONS, PROFESSION_OPTIONS } from "@/lib/form-options"
import type { UseFormReturn } from "react-hook-form"

export function StepTwo({ form }: { form: UseFormReturn<any> }) {
    return (
        <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 gap-4">
                <FormSelect name="profileFor" placeholder="Profile For" options={PROFILE_FOR_OPTIONS} form={form} />
                <FormSelect name="city" placeholder="City" options={CITY_OPTIONS} form={form} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <FormSelect name="education" placeholder="Education" options={EDUCATION_OPTIONS} form={form} />
                <FormSelect name="profession" placeholder="Profession" options={PROFESSION_OPTIONS} form={form} />
            </div>
        </div>
    )
}
