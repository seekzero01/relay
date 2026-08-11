"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { signIn, emailOtp } from "@repo/auth/client";
import type { OAuthProviderId } from "@/features/auth/types/oauth-provider";
import type { SignupFieldErrors } from "@/features/auth/types/signup";

interface UseSignupActionsResult {
    isPending: boolean;
    errors: SignupFieldErrors;
    signUpWithProvider: (provider: OAuthProviderId) => void;
    sendOtp: (email: string) => Promise<boolean>;
    verifyOtpAndSignUp: (email: string, otp: string) => void;
}

export function useSignupActions(): UseSignupActionsResult {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [errors, setErrors] = useState<SignupFieldErrors>({});

    function signUpWithProvider(provider: OAuthProviderId) {
        setErrors({});
        startTransition(async () => {
            const { error } = await signIn.social({ provider });
            if (error) {
                setErrors({ form: error.message ?? "Unable to continue. Try again." });
            }
        });
    }

    function sendOtp(email: string): Promise<boolean> {
        setErrors({});

        if (!email.trim() || !email.includes("@")) {
            setErrors({ email: "Enter a valid email address." });
            return Promise.resolve(false);
        }

        return new Promise((resolve) => {
            startTransition(async () => {
                const { error } = await emailOtp.sendVerificationOtp({
                    email,
                    type: "sign-in",
                });

                if (error) {
                    setErrors({ email: error.message ?? "Could not send code." });
                    resolve(false);
                    return;
                }

                resolve(true);
            });
        });
    }

    function verifyOtpAndSignUp(email: string, otp: string) {
        setErrors({});

        if (otp.trim().length < 6) {
            setErrors({ otp: "Enter the 6-digit code." });
            return;
        }

        startTransition(async () => {
            const { error } = await signIn.emailOtp({ email, otp });

            if (error) {
                setErrors({ otp: error.message ?? "Invalid or expired code." });
                return;
            }

            router.push("/dashboard");
        });
    }

    return {
        isPending,
        errors,
        signUpWithProvider,
        sendOtp,
        verifyOtpAndSignUp,
    };
}