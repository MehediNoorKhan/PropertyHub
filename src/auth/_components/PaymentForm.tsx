import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";

const paymentSchema = z.object({
    cardName: z.string().min(2, "Required"),
    cardNumber: z.string().min(16, "Card number required"),
    expiry: z.string().min(4, "MM/YY required"),
    cvv: z.string().min(3, "CVV required"),
    specialRequests: z.string().optional(),
});

export function PaymentForm() {
    const form = useForm<z.infer<typeof paymentSchema>>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            cardName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
            specialRequests: "",
        },
    });

    function onSubmit(values: z.infer<typeof paymentSchema>) {
        console.log("Payment Data:", values);
    }

    return (
        <div className="
            bg-white 
            rounded-2xl 
            px-4 py-6
            sm:px-6 sm:py-8
            md:px-8 md:py-10
        ">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-start mb-6">
                Payment Info
            </h1>

            <Button
                className="
                    text-[#635BFF]
                    bg-[#F3F3F3]
                    py-6
                    rounded-4xl
                    text-[32px]
                    font-bold
                    cursor-pointer
                "
            >
                stripe
            </Button>

            <div className="my-6">
                <FieldSeparator>
                    <span className="text-sm sm:text-base opacity-60">OR</span>
                </FieldSeparator>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* CARD NAME */}
                    <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Card Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
                                        {...field}
                                        className="h-[48px] sm:h-[52px] bg-[#F5F5F5] rounded-xl"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* CARD NUMBER */}
                    <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="1234 5678 9012 3456"
                                        {...field}
                                        className="h-[48px] sm:h-[52px] bg-[#F5F5F5] rounded-xl"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* EXPIRY + CVV */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="expiry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>MM/YY</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="12/28"
                                            {...field}
                                            className="h-[48px] sm:h-[52px] bg-[#F5F5F5] rounded-xl"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CVV</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="123"
                                            {...field}
                                            className="h-[48px] sm:h-[52px] bg-[#F5F5F5] rounded-xl"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* SPECIAL REQUESTS */}
                    <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Special Requests</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write your request..."
                                        {...field}
                                        className="
                                            h-[140px] md:h-[300px]
                                            xl:h-[360px]
                                            bg-[#F5F5F5]
                                            rounded-xl
                                            resize-none
                                        "
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* SUBMIT */}
                    <Button
                        type="submit"
                        className="
                            bg-[#7FA38B] 
                            text-white 
                            w-full 
                            h-[48px] md:mt-[40px]
                            xl:mt-[12px]
                            rounded-full
                            text-lg
                            cursor-pointer
                        "
                    >
                        Finalize Booking
                    </Button>

                </form>
            </Form>
        </div>
    );
}
