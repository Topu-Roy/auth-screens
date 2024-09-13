"use client";

import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpSchemaType } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormFields } from "@/assets/formFields";
import { FormInput, FormInputErrorText } from "@/components/FormInput";
import LogoSVG from "@/assets/logo";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-md text-black"
    >
      <div className="translate-x-[3.1rem] scale-125 pb-5">
        <LogoSVG />
      </div>
      <h2 className="text-3xl font-bold">Create your account</h2>
      <p className="pb-3 text-sm font-semibold text-black/60">
        Enter your details to create your account
      </p>

      <div className="space-y-3 pb-3">
        {SignUpFormFields.map((item) => (
          <FormInput
            id={item.id}
            placeholder={item.placeholder}
            register={register}
            type={item.type}
            required={true}
            key={item.id}
            isError={!!errors[item.id]}
            errorMessage={errors[item.id]?.message ?? ""}
          />
        ))}
      </div>

      <div className="space-y-2 pb-3">
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            className="mr-2 h-4 w-4 bg-gray-100 text-indigo-700"
          />
          <label
            htmlFor="terms"
            className="text-sm font-semibold text-gray-500"
          >
            I accept the terms and conditions
          </label>
        </div>
        {errors.terms && (
          <FormInputErrorText message={errors.terms.message ?? ""} />
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-indigo-900 px-4 py-3 font-semibold tracking-wide text-white transition-all hover:bg-indigo-950 active:scale-105"
      >
        Sign Up
      </button>
    </form>
  );
}
