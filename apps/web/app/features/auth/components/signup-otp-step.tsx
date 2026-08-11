"use client";

import { useState, type FormEvent } from "react";
import type { SignupFieldErrors } from "@/features/auth/types/signup";

interface SignupOtpStepProps {
    email: string;
    onSubmit: (otp: string) => void;
    onResend: () => void;
    errors: SignupFieldErrors;
    isPending: boolean;
    onBack: () => void;
}

export function SignupOtpStep({
                                  email,
                                  onSubmit,
                                  onResend,
                                  errors,
                                  isPending,
                                  onBack,
                              }: SignupOtpStepProps) {
    const [otp, setOtp] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onSubmit(otp);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <p className="text-sm text-neutral-300">
                    Enter the code sent to <span className="text-neutral-100">{email}</span>
                </p>
                <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="123456"
                    autoComplete="one-time-code"
                    autoFocus
                    className="tracking-[0.5em] text-center rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:tracking-normal placeholder:text-neutral-600 focus:border-neutral-600 focus:outline-none"
                />
                {errors.otp && (
                    <span className="text-xs text-red-400">{errors.otp}</span>
                )}
            </div>

            {errors.form && (
                <p className="text-xs text-red-400" role="alert">
                    {errors.form}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending || otp.length < 6}
                className="mb-2 w-full rounded-md bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isPending ? "Verifying…" : "Create account"}
            </button>

            <div className="flex items-center justify-between text-sm">
                <button
                    type="button"
                    onClick={onBack}
                    className="text-neutral-400 hover:text-neutral-200"
                >
                    ← Back
                </button>
                <button
                    type="button"
                    onClick={onResend}
                    disabled={isPending}
                    className="text-neutral-400 hover:text-neutral-200 disabled:opacity-50"
                >
                    Resend code
                </button>
            </div>
        </form>
    );
}