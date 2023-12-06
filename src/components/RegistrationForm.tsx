"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";


const signUpSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    password: z.string().min(9, "Password must be at least 9 characters"),
    confirmPassword: z.string(),
    conditions: z.boolean(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails must match",
    path: ["confirmEmail"],
  })
  .refine((data) => data.conditions === true, {
    message: "You must accepts our terms and conditions",
    path: ["conditions"],
  });

const RegistrationForm = () => {
  const router = useRouter();

  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  type registrationDTO = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const user: registrationDTO = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      };

      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      });

      const jsonResponse = await response.json();
      console.log(jsonResponse);

      if (response.status === 200) {
        router.push("/");
      } else {

        for (const [key, value] of Object.entries(jsonResponse)){
          setServerError(`${value}`)
        }
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-screen h-auto bg-transparent p-4 flex items-center justify-center my-18"
    >
      <div className="bg-white sm:max-w-md w-full flex flex-col mt-28 p-4 gap-4">
        <div className="sm:text-3xl text-2xl font-bold text-center text-sky-400 mb-12 mt-4">
          Sign Up
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 flex"
            />
            {errors.firstName && (
              <p className="text-red-500 mt-3">{`${errors.firstName.message}`}</p>
            )}
          </div>
          <div>
            <input
              {...register("lastName")}
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 flex"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 mt-3">{`${errors.lastName.message}`}</p>
            )}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Email Adress"
            />
            
            {errors.email && (
              <p className="text-red-500 mt-3">{`${errors.email.message}`}</p>
            )}
          </div>
          <div>
            <input
              {...register("confirmEmail")}
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Confirm Email"
            />
            {errors.confirmEmail && (
              <p className="text-red-500 mt-3">{`${errors.confirmEmail.message}`}</p>
            )}
          </div>
          <div className="">
            <input
              {...register("password")}
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 mt-3">{`${errors.password.message}`}</p>
            )}
          </div>
          <div className="">
            <input
              {...register("confirmPassword")}
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mt-3">{`${errors.confirmPassword.message}`}</p>
            )}
          </div>
          <div className="flex">
            <input
              {...register("conditions")}
              type="checkbox"
              className="border-sky-400 "
              value=""
            />
            <div className="px-3 text-gray-500">
              I accept terms & conditions
            </div>
          </div>
          {errors.conditions && (
            <p className="text-red-500">{`${errors.conditions.message}`}</p>
          )}
          {serverError && (
              <div className="text-red-500 text-center">
                {serverError}
              </div>
            )}
          <div className="flex justify-center my-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex rounded-full p-3 w-full sm:w-56  text-center bg-gradient-to-r from-sky-400  to-slate-600 text-white text-lg font-semibold justify-center "
            >
              {isSubmitting === false ? (
                "Create account"
              ) : (
                <FaSpinner className="animate-spin" />
              )}
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Already have an account? </p>
            <a href="/auth/login" className="text-sky-600 pl-2">
              {" "}
              Sign In
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
