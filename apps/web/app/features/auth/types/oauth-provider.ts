import type { ComponentType } from "react";
import type { SvgIconProps } from '@thesvg/react';

export type OAuthProviderId = "github" | "google" | "microsoft";

export interface OAuthProviderConfig {
    id: OAuthProviderId;
    label: string;
    Icon: ComponentType<SvgIconProps>;
}