"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Form } from "./ui/form"
import { StepOne } from "./form-steps/step-one"
import { StepTwo } from "./form-steps/step-two"
import { StepThree } from "./form-steps/step-three"
import toast from "react-hot-toast"

const formSchema = z.object({
    // Step 1
    gender: z.string().min(1, "Required"),
    maritalStatus: z.string().min(1, "Required"),
    ageFrom: z.string().min(1, "Required"),
    ageTo: z.string().min(1, "Required"),
    heightFrom: z.string().min(1, "Required"),
    heightTo: z.string().min(1, "Required"),
    religion: z.string().min(1, "Required"),
    country: z.string().min(1, "Required"),
    // Step 2
    profileFor: z.string().min(1, "Required"),
    city: z.string().min(1, "Required"),
    education: z.string().min(1, "Required"),
    profession: z.string().min(1, "Required"),
    // Step 3
    phoneCode: z.string().min(1, "Required"),
    phoneNumber: z.string().min(5, "Invalid phone"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 characters"),
})

export type FormValues = z.infer<typeof formSchema>

export const SearchCard=()=> {
    const [step, setStep] = useState(1)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gender: "",
            maritalStatus: "",
            ageFrom: "",
            ageTo: "",
            heightFrom: "",
            heightTo: "",
            religion: "",
            country: "",
            profileFor: "",
            city: "",
            education: "",
            profession: "",
            phoneCode: "+880",
            phoneNumber: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log("Final Form Data:", data)
        toast.success("Form submitted! Check console for data.")
    }

    const nextStep = async () => {
        let fieldsToValidate: (keyof FormValues)[] = []
        if (step === 1) {
            fieldsToValidate = [
                "gender",
                "maritalStatus",
                "ageFrom",
                "ageTo",
                "heightFrom",
                "heightTo",
                "religion",
                "country",
            ]
        } else if (step === 2) {
            fieldsToValidate = ["profileFor", "city", "education", "profession"]
        }

        const isValid = await form.trigger(fieldsToValidate)
        if (isValid) setStep((s) => s + 1)
    }

    const prevStep = () => setStep((s) => s - 1)

    return (
        <Card className="w-sm mx-auto shadow-2xl border-none">
            <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-primary leading-tight">
                    Finding Your LIFE PARTNER <br /> Has Never Been Easier
                </CardTitle>
                <div className="w-24 h-0.5 bg-primary/20 mx-auto mt-2" />
            </CardHeader>
            <CardContent className="pt-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {step === 1 && <StepOne form={form} />}
                        {step === 2 && <StepTwo form={form} />}
                        {step === 3 && <StepThree form={form} />}

                        <div className="flex gap-4 pt-4">
                            {step > 1 && (
                                <Button
                                    type="button"
                                    onClick={prevStep}
                                    variant="outline"
                                    className="flex-1 cursor-pointer py-6 text-lg font-medium shadow-md border-primary/20 text-primary hover:bg-primary/5 bg-transparent"
                                >
                                    Back
                                </Button>
                            )}
                            {step < 3 ? (
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 cursor-pointer bg-primary hover:bg-primary/90 text-white rounded-md py-6 text-lg font-semibold shadow-md"
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    className="flex-1 cursor-pointer bg-primary hover:bg-primary/90 text-white rounded-md py-6 text-lg font-semibold shadow-md"
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
