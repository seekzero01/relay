import type { MicrosoftOptions } from "better-auth/social-providers";

export const microsoftProvider: MicrosoftOptions = {
    clientId: process.env.MICROSOFT_CLIENT_ID as string,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
    tenantId: "common",
    authority: "https://login.microsoftonline.com",
    prompt: "select_account",
};