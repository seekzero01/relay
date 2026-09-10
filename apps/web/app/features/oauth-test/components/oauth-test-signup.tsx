"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Google, Microsoft } from "@thesvg/react";
import type { SocialProviderId } from "@repo/auth/providers";
import { OAuthProviderButton } from "@/features/oauth-test/components/oauth-provider-button";
import { OAuthStatusPanel } from "@/features/oauth-test/components/oauth-status-panel";
import { useOAuthTestFlow } from "@/features/oauth-test/lib/use-oauth-test-flow";

const providers = [
  { id: "google", label: "Continue with Google", Icon: Google },
  { id: "github", label: "Continue with GitHub", Icon: Github },
  { id: "microsoft", label: "Continue with Microsoft", Icon: Microsoft },
] as const;

export function OAuthTestSignup() {
  const { flow, handleSignIn } = useOAuthTestFlow();
  const isPending = flow.status === "pending";

  return (
    <main className="fixed inset-0 w-full overflow-y-auto overflow-x-hidden bg-[#050505] text-white">
      <header className="flex items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image src="/logo/logo.svg" alt="Relay" width={28} height={28} priority />
          {/*<span className="text-lg">Relay</span>*/}
        </Link>

        <Link
          href="/auth/login"
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Log in
        </Link>
      </header>

      <section className="flex min-h-[calc(100vh-88px)] items-center justify-center px-5 pb-20 sm:px-6">
        <div className="flex min-h-140 w-full max-w-140 items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b0b] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:px-10">
          <div className="w-full max-w-[384px]">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-semibold leading-[1.2] tracking-[-0.055em] text-white sm:text-4xl">
                Your AI-powered knowledge base is just a sign-up away.
              </h1>
            </div>

            <div className="space-y-3">
              {providers.map(({ id, label, Icon }) => (
                <OAuthProviderButton
                  key={id}
                  provider={id as SocialProviderId}
                  label={label}
                  Icon={Icon}
                  isPending={isPending}
                  onClick={handleSignIn}
                />
              ))}
            </div>

            <Link
              href="/auth/signup"
              className="mt-6 block text-center text-sm font-medium text-[#52a8ff] transition hover:text-[#8bc5ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52a8ff]"
            >
              Continue with Email →
            </Link>

            <OAuthStatusPanel flow={flow} />

            <p className="mt-9 text-center text-xs leading-5 text-white/40">
              By joining, you agree to our{" "}
              <Link href="/legal/terms" className="text-white/70 underline underline-offset-2 hover:text-white">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/legal/privacy" className="text-white/70 underline underline-offset-2 hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
