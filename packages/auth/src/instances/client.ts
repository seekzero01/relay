import {createAuthClient} from "better-auth/react";
import {emailOTPClient} from "better-auth/client/plugins";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    plugins: [
        emailOTPClient()
    ]
});

export const { signIn, signOut, useSession, emailOtp } = authClient;