import { authClient } from "./client.js";
import { providerConfig, type OAuthProvider } from "./providers.js";

export async function signInWithProvider(
    provider: OAuthProvider,
    overrides?: { callbackURL?: string }
) {
    const config = providerConfig[provider];
    return await authClient.signIn.social({
        provider,
        callbackURL: overrides?.callbackURL ?? config.callbackURL,
    });
}

// consumer usage - import { signInWithProvider } from "@repo/auth/sign-in"