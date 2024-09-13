import AuthCarousel from "@/components/Carousel";
import GoogleButton from "@/components/googleButton";
import Link from "next/link";
import SignInForm from "@/components/signInForm";

export default function SignInPage() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-slate-200">
      <div className="grid h-[90dvh] w-full max-w-[90rem] grid-cols-2 overflow-hidden rounded-3xl bg-transparent shadow-md">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-white">
          <SignInForm />

          <div className="mx-auto flex w-full max-w-md items-center justify-center gap-4">
            <div className="h-0.5 w-full bg-black/50"></div>
            <div className="text-black/60">or</div>
            <div className="h-0.5 w-full bg-black/50"></div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <GoogleButton className="w-full" />
          </div>

          <p className="absolute bottom-[2%] left-[50%] -translate-x-[50%] text-xs font-semibold text-black/70">
            Don&apos;t have an account?{" "}
            <Link
              href={"/sign-up"}
              className="text-sm font-bold text-indigo-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center bg-indigo-950">
          <AuthCarousel />
        </div>
      </div>
    </main>
  );
}
