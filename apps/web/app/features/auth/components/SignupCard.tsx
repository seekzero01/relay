"use client";

import Link from "next/link";
import { oauthProviders } from "@/features/auth/config/oauth-providers";
import OAuthButton from "@/features/auth/components/OAuthButton";

export function SignupCard() {
    const { isPending, errors, signUpWithProvider, signUpWithEmail } =
        useSignupActions();

    return (
        <div className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-950 p-6">

                <div className="flex flex-col gap-3">
                    {oauthProviders.map((provider) => (
                        <OAuthButton
                            key={provider.id}
                            label={provider.label}
                            Icon={provider.Icon}
                            disabled={isPending}
                            onClick={() => signUpWithProvider(provider.id)}
                        />
                    ))}

                    {errors.form && (
                        <p className="text-xs text-red-400" role="alert">
                            {errors.form}
                        </p>
                    )}
                </div>

            <p className="mt-6 text-center text-xs text-neutral-500">
                By joining, you agree to our{" "}
                <Link href="/legal/terms" className="underline hover:text-neutral-300">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                    href="/legal/privacy"
                    className="underline hover:text-neutral-300"
                >
                    Privacy Policy
                </Link>
                .
            </p>

            <p className="mt-4 text-center text-sm text-neutral-400">
                Already have an account?{" "}
                <Link
                    href="/auth/login"
                    className="font-medium text-neutral-100 hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
}