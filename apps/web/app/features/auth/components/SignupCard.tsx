"use client";

import { useState } from "react";
import Link from "next/link";
import { oauthProviders } from "@/features/auth/config/oauth-providers";
import { SignupEmailStep } from "@/features/auth/components/signup-email-step";
import { SignupOtpStep } from "@/features/auth/components/signup-otp-step";
import { useSignupActions } from "@/features/auth/lib/use-signup-actions";
import type { SignupStep } from "@/features/auth/types/signup";
import OAuthButton from "@/features/auth/components/OAuthButton";

export function SignupCard() {
    const [step, setStep] = useState<SignupStep>("options");
    const [email, setEmail] = useState("");
    const { isPending, errors, signUpWithProvider, sendOtp, verifyOtpAndSignUp } =
        useSignupActions();

    async function handleSendOtp(submittedEmail: string) {
        const sent = await sendOtp(submittedEmail);
        if (sent) {
            setEmail(submittedEmail);
            setStep("otp-verify");
        }
    }

    return (
        <div className="w-full max-w-sm rounded-xl border border-neutral-800 bg-neutral-950 p-6">
            {step === "options" && (
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

                    <button
                        type="button"
                        onClick={() => setStep("email-entry")}
                        className="mb-2 text-center text-sm text-neutral-300 underline-offset-4 hover:text-neutral-100 hover:underline"
                    >
                        Continue with Email →
                    </button>
                </div>
            )}

            {step === "email-entry" && (
                <SignupEmailStep
                    onSubmit={handleSendOtp}
                    errors={errors}
                    isPending={isPending}
                    onBack={() => setStep("options")}
                />
            )}

            {step === "otp-verify" && (
                <SignupOtpStep
                    email={email}
                    onSubmit={(otp) => verifyOtpAndSignUp(email, otp)}
                    onResend={() => sendOtp(email)}
                    errors={errors}
                    isPending={isPending}
                    onBack={() => setStep("email-entry")}
                />
            )}

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