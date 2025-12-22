import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Aside from "./Aside";

const registerSchema = z
  .object({
    name: z.string().min(2, "The name must have at least 2 characters."),
    email: z.string().email("Email is not valid."),
    password: z
      .string()
      .min(6, "Password must have a minimum of 6 characters."),
    confirmPassword: z.string().min(6, "Confirm password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const RegisterPage = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8096/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Registered successfully");
      window.location.href = "/login";
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0d0d0d]">
      <Aside />
      <Card className="w-full max-w-md p-6 bg-white dark:bg-[#1a1a1a] shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl dark:text-white">
            Create an Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* NAME */}
            <div>
              <label className="block mb-1 text-sm dark:text-white">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Name..."
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-1 text-sm dark:text-white">
                Email
              </label>
              <Input
                type="email"
                placeholder="Email..."
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block mb-1 text-sm dark:text-white">
                Password
              </label>
              <Input
                type="password"
                placeholder="Password..."
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="block mb-1 text-sm dark:text-white">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="Confirm password..."
                {...form.register("confirmPassword")}
              />
              {form.formState.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
