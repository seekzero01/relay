import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {db} from "@repo/database";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            prompt: "select_account consent",
            accessType: "offline",
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        microsoft: {
            clientId: process.env.MICROSOFT_CLIENT_ID as string,
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
            tenantId: 'common',
            authority: "https://login.microsoftonline.com",
            prompt: "select_account",
        },
    },

    baseURL: process.env.BETTER_AUTH_URL,        // e.g. https://api.example.com
    secret: process.env.BETTER_AUTH_SECRET,

    trustedOrigins: [process.env.WEB_URL!],       // e.g. https://app.example.com

    advanced: {
        crossSubDomainCookies: {
            enabled: true,
            domain: process.env.COOKIE_DOMAIN,        // ".example.com" in prod, ".localtest.me" in dev — env-driven, never hardcoded
        },
        useSecureCookies: process.env.NODE_ENV === "production",
        database: {
            generateId: false,
        }
    },

    emailAndPassword: {
        enabled: true,
    },
});