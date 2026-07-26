import { googleProvider } from "./google.provider.js";
import { githubProvider } from "./github.provider.js";
import { microsoftProvider } from "./microsoft.provider.js";

export const socialProviders = {
    google: googleProvider,
    github: githubProvider,
    microsoft: microsoftProvider,
} as const;

export type SocialProviderId = keyof typeof socialProviders;

export { googleProvider, githubProvider, microsoftProvider };