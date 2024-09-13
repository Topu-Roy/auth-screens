"use client";

import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpSchemaType } from "@/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormFields } from "@/assets/formFields";
import { FormInput, FormInputErrorText } from "@/components/FormInput";
import LogoSVG from "@/assets/logo";
import AuthCarousel from "@/components/Carousel";

export default function SignUpPage() {
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
    <main className="flex min-h-[100dvh] items-center justify-center">
      <div className="grid h-[90dvh] w-full max-w-[90rem] grid-cols-2 overflow-hidden rounded-3xl bg-transparent">
        <div className="flex h-full w-full items-center justify-center bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto w-full max-w-md text-black"
          >
            <LogoSVG />
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
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center bg-indigo-950">
          <AuthCarousel />
        </div>
      </div>
    </main>
  );
}
