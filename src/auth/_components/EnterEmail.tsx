import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function EnterEmail() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log("Entered Email:", values.email);

      toast.success("✅ Verification email sent!");

      // ✅ Navigate to next step (example)
      navigate("/verification");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
  <Form {...form}>
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center text-center"
    >
      <h2 className=" text-[32px] xl:text-[52px] font-bold mb-10">Enter Email</h2>

      <div className="w-full">
        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="w-full rounded-2xl placeholder-[#F6F6F6] text-[#858585] p-2 pr-12 placeholder:text-[16px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* SUBMIT BUTTON */}
     
        <Button
          type="submit"
          className="mt-[32px] bg-[#7FA38B] w-full rounded-2xl cursor-pointer"
        >
          Submit
        </Button>
      
      </div>
    </form>
  </Form>
</div>

  );
}
