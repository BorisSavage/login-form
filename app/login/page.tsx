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
import { cn } from "@/lib/utils";

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
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-start space-y-12 pt-12 pb-24 px-4",
        "lg:space-y-4",
      )}
    >
      <div
        className={cn(
          "text-center max-w-xl w-full",
          "lg:max-w-5xl lg:text-left lg:px-2",
        )}
      >
        <h1 className={cn("text-3xl font-bold")}>
          <span className="underline decoration-blue-500 underline-offset-4">
            Logi
          </span>
          <span>n</span>
        </h1>
        <p className="font-medium">To access your account</p>
      </div>
      <div className={cn("relative max-w-xl w-full", "lg:max-w-5xl")}>
        <div
          className={cn(
            "absolute left-8 right-8 -inset-y-8 bg-blue-500 -skew-y-6",
            "lg:left-2/3",
          )}
        ></div>
        <div
          className={cn(
            "relative items-center justify-center border bg-neutral-100 p-2 space-y-4",
            "lg:flex lg:justify-around",
          )}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={cn("space-y-8 border p-4 bg-neutral-200", "lg:grow")}
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

          <div
            className={cn(
              "flex text-sm font-medium flex-col space-y-2 items-center justify-center",
              "lg:w-[calc(33.33%+2rem)] lg:pl-2",
            )}
          >
            <span className="block text-center">Not a member?</span>
            <Button type="submit">Register today</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
