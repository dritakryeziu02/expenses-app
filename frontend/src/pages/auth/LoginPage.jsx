import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Aside from "./Aside";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // login
  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8096/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.href = "/profile";
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0d0d0d]">
      <Aside />

      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Email" {...form.register("email")} />
          <p className="text-red-500 text-sm">
            {form.formState.errors.email?.message}
          </p>

          <Input
            type="password"
            placeholder="Password"
            {...form.register("password")}
          />
          <p className="text-red-500 text-sm">
            {form.formState.errors.password?.message}
          </p>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
