"use client";

import { useForm } from "react-hook-form";
import { SignInSchema, type SignInSchemaType } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormFields } from "@/assets/formFields";
import { FormInput } from "@/components/FormInput";
import LogoSVG from "@/assets/logo";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInSchemaType) => {
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
      <h2 className="text-3xl font-bold">Get Started</h2>
      <p className="pb-3 text-sm font-semibold text-black/60">
        Welcome back, Enter your credentials to sign in
      </p>

      <div className="space-y-3 pb-3">
        {SignInFormFields.map((item) => (
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-indigo-900 px-4 py-3 font-semibold tracking-wide text-white transition-all hover:bg-indigo-950 active:scale-105"
      >
        Sign In
      </button>
    </form>
  );
}
