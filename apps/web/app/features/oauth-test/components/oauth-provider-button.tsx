import type { ComponentType } from "react";
import type { SvgIconProps } from "@thesvg/react";
import type { SocialProviderId } from "@repo/auth/providers";

interface OAuthProviderButtonProps {
  provider: SocialProviderId;
  label: string;
  Icon: ComponentType<SvgIconProps>;
  isPending: boolean;
  onClick: (provider: SocialProviderId) => void;
}

export function OAuthProviderButton({
  provider,
  label,
  Icon,
  isPending,
  onClick,
}: OAuthProviderButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(provider)}
      disabled={isPending}
      className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/3 px-4 text-sm font-medium text-white transition duration-200 hover:border-white/30 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Icon className="size-5 transition-transform duration-200 group-hover:scale-110" />
      <span className="text-base font-medium">{label}</span>
    </button>
  );
}
