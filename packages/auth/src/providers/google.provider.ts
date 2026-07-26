import type { GoogleOptions } from "better-auth/social-providers";

export const googleProvider: GoogleOptions = {
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
};