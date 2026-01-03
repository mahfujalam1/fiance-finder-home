import { FormSelect } from "@/components/form-select"
import { AGE_RANGE, COUNTRY_OPTIONS, GENDER_OPTIONS, HEIGHT_RANGE, MARITAL_STATUS_OPTIONS, RELIGION_OPTIONS } from "@/lib/form-options"

import type { UseFormReturn } from "react-hook-form"

export function StepOne({ form }: { form: UseFormReturn<any> }) {
    return (
        <div className="space-y-4 animate-in fade-in duration-300">
            <div className="grid grid-cols-2 gap-4">
                <FormSelect name="gender" placeholder="Gender" options={GENDER_OPTIONS} form={form} />
                <FormSelect name="maritalStatus" placeholder="Marital Status" options={MARITAL_STATUS_OPTIONS} form={form} />
            </div>

            <div className="flex items-center gap-2">
                <FormSelect name="ageFrom" placeholder="Age" options={AGE_RANGE} form={form} />
                <span className="text-sm text-muted-foreground shrink-0 -ms-3">to</span>
                <FormSelect name="ageTo" placeholder="Age" options={AGE_RANGE} form={form} />
            </div>

            <div className="flex items-center gap-2">
                <FormSelect name="heightFrom" placeholder="Height" options={HEIGHT_RANGE} form={form} />
                <span className="text-sm text-muted-foreground shrink-0 -ms-3">to</span>
                <FormSelect name="heightTo" placeholder="Height" options={HEIGHT_RANGE} form={form} />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <FormSelect name="religion" placeholder="Religion" options={RELIGION_OPTIONS} form={form} />
                <FormSelect name="country" placeholder="Country" options={COUNTRY_OPTIONS} form={form} />
            </div>
        </div>
    )
}
