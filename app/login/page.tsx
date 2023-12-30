"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const passwordErrorMessage = {
  message: "Password must be between 7 and 25 characters",
};

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }).max(100, {
    message: "Username must be maximum 100 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(7, passwordErrorMessage)
    .max(25, passwordErrorMessage),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const usernameError = form.formState.errors.username;
  const emailError = form.formState.errors.email;
  const passwordError = form.formState.errors.password;

  return (
    <main className="flex min-h-screen flex-col items-stretch justify-start space-y-12 pt-12 pb-24 px-4">
      <h1 className="text-center text-3xl font-bold">Login</h1>
      <div className="relative">
        <div className="absolute inset-x-8 -inset-y-8 bg-blue-500 -skew-y-6"></div>
        <div className="relative border bg-neutral-100 p-2 space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 border p-4 bg-neutral-300"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="your username" {...field} />
                    </FormControl>
                    {!usernameError && (
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your email" {...field} />
                    </FormControl>
                    {!emailError && (
                      <FormDescription>
                        This is the email address we will associate with your
                        account.
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="your secret password" {...field} />
                    </FormControl>
                    {!passwordError && (
                      <FormDescription>
                        This is the password you will protect your account with.
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <div>
                  <Link
                    className="text-sm font-medium underline underline-offset-4"
                    href="#"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit">Login</Button>
              </div>
            </form>
          </Form>

          <div className="flex text-sm font-medium flex-col space-y-2 items-center justify-center">
            <span className="block text-center">Not a member?</span>
            <Button type="submit">Register today</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
