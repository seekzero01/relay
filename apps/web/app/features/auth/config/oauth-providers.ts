import type { OAuthProviderConfig } from "@/features/auth/types/oauth-provider";
import {Github, Google, Microsoft} from "@thesvg/react";

export const oauthProviders: OAuthProviderConfig[] = [
    { id: "github", label: "Continue with GitHub", Icon: Github },
    { id: "google", label: "Continue with Google", Icon: Google },
    { id: "microsoft", label: "Continue with Microsoft", Icon: Microsoft },
];