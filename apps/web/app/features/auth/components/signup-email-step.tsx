"use client";

import { useState, type FormEvent } from "react";
import type { SignupFieldErrors } from "@/features/auth/types/signup";

interface SignupEmailStepProps {
    onSubmit: (email: string) => void;
    errors: SignupFieldErrors;
    isPending: boolean;
    onBack: () => void;
}

export function SignupEmailStep({
                                    onSubmit,
                                    errors,
                                    isPending,
                                    onBack,
                                }: SignupEmailStepProps) {
    const [email, setEmail] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onSubmit(email);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm text-neutral-300">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    autoComplete="email"
                    autoFocus
                    className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-neutral-600 focus:outline-none"
                />
                {errors.email && (
                    <span className="text-xs text-red-400">{errors.email}</span>
                )}
            </div>

            {errors.form && (
                <p className="text-xs text-red-400" role="alert">
                    {errors.form}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="mb-2 w-full rounded-md bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                {isPending ? "Sending code…" : "Send code"}
            </button>

            <button
                type="button"
                onClick={onBack}
                className="text-center text-sm text-neutral-400 hover:text-neutral-200"
            >
                ← Back
            </button>
        </form>
    );
}