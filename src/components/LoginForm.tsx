"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { FieldValues } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

const logInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type loginDTO = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(logInSchema),
  });

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FieldValues) => {
    try {
      const credentials: loginDTO = {
        email: data.email,
        password: data.password,
      };

      const response = await fetch("http://18.231.115.87:443/auth/login", {
        method: "POST",
        mode:'no-cors',
        body: JSON.stringify(credentials),
        headers: {
          "Content-type": "application/json",
        },
      });
      const jsonResponse = await response.json();

      if (response.status === 200) {
        login(jsonResponse.jwt)
        router.push("/dashboard");
      } else {
        setServerError(jsonResponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-screen h-screen bg-transparent p-4 flex items-center justify-center my-18"
    >
      <div className="bg-white sm:max-w-md w-full flex flex-col mt-28 p-4 gap-2">
        <div className="sm:text-3xl text-2xl font-bold text-center text-sky-400 mt-4">
          Log in to Your Account
        </div>
        <div className="sm:text-lg text-sm font-light font-sans text-center  text-slate-500">
          Log in with your social media
        </div>
        <div className="w-auto flex flex-row justify-center mt-4 gap-4">
          <button className="bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-blue-300 text-white font-bold rounded-full w-12 h-12 text-center justify-center flex items-center">
            <FaFacebookF className="text-3xl" />
          </button>
          <button className="bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-blue-300  text-white font-bold rounded-full w-12 h-12 text-center justify-center flex items-center">
            <FaGoogle className="text-3xl" />
          </button>
          <button className="bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:bg-blue-300  text-white font-bold rounded-full w-12 h-12 text-center justify-center flex items-center">
            <FaApple className="text-3xl" />
          </button>
        </div>
        <span className="my-8 text-center"> OR </span>
        <div className="flex flex-col gap-12">
          <div>
            <input
              {...register("email")}
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Email"
            />
          </div>
          <div className="">
            <input
              {...register("password")}
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex rounded-full p-3 w-full sm:w-56  text-center bg-gradient-to-r from-sky-400  to-slate-600 text-white text-lg font-semibold justify-center "
          >
            {isSubmitting === false ? (
              "Login"
            ) : (
              <FaSpinner className="animate-spin" />
            )}
          </button>
        </div>
        {serverError && (
          <div className="text-red-500 text-sm text-center">{serverError}</div>
        )}
        <div className="flex flex-col justify-center sm:flex-row mt-4">
          <p className="text-gray-500 text-sm "> Forgot your password? </p>
          <a href="/auth/login" className="text-sky-600 sm:pl-2  text-sm">
            {" "}
            Recover your password
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
