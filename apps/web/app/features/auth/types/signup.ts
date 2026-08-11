export type SignupStep = "options" | "email-entry" | "otp-verify";

export interface SignupFieldErrors {
    email?: string;
    otp?: string;
    form?: string;
}