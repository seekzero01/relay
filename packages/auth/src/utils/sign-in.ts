import { signIn } from "../instances/client.js";
import type { SocialProviderId } from "../providers/index.js";

export interface SignInWithOAuthParams {
    provider: SocialProviderId;
    callbackURL?: string;
}

export async function signInWithOAuth({
                                          provider,
                                          callbackURL,
                                      }: SignInWithOAuthParams): Promise<any> {
    const { data, error } = await signIn.social({
        provider,
        ...(callbackURL ? { callbackURL } : {}),
    });

    return { data, error }
}