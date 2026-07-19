import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import {db} from "@repo/database";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),

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