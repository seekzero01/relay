export const OAUTH_PROVIDERS = ["google", "github", "microsoft"] as const;
export type OAuthProvider = (typeof OAUTH_PROVIDERS)[number];

export const providerConfig: Record<OAuthProvider, { callbackURL: string }> = {
    google: { callbackURL: "/dashboard" },
    github: { callbackURL: "/dashboard" },
    microsoft: { callbackURL: "/dashboard?tenant=work" },
};