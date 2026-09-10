"use client";

import { useState } from "react";
import { useSession } from "@repo/auth/client";
import { SocialProviderId } from "@repo/auth/providers";
import { signInWithOAuth } from "@repo/auth/sign-in";

export type FlowStatus = "idle" | "pending" | "success" | "failed";

export interface FlowState {
  status: FlowStatus;
  provider: SocialProviderId | null;
  message: string | null;
  data: unknown;
}

const callbackUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/test`;

export function useOAuthTestFlow() {
  const { data: session, isPending, error: sessionError } = useSession();
  const [flow, setFlow] = useState<FlowState>({
    status: "idle",
    provider: null,
    message: null,
    data: null,
  });

  const derivedFlow = deriveFlowState({ flow, isPending, session, sessionError });

  async function handleSignIn(provider: SocialProviderId) {
    setFlow({
      status: "pending",
      provider,
      message: `Redirecting to ${provider}...`,
      data: null,
    });

    try {
      const response = await signInWithOAuth({ provider, callbackURL: callbackUrl });

      if (response.error) {
        setFlow({
          status: "failed",
          provider,
          message: response.error.message ?? "Failed to start sign-in flow",
          data: response.data,
        });
      }
    } catch (error) {
      setFlow({
        status: "failed",
        provider,
        message: error instanceof Error ? error.message : "Failed to start sign-in flow",
        data: error,
      });
    }
  }

  return { flow: derivedFlow, handleSignIn };
}

function deriveFlowState({
  flow,
  isPending,
  session,
  sessionError,
}: {
  flow: FlowState;
  isPending: boolean;
  session: ReturnType<typeof useSession>["data"];
  sessionError: ReturnType<typeof useSession>["error"];
}): FlowState {
  if (flow.status === "pending" || flow.status === "failed") {
    return flow;
  }

  if (isPending) {
    return { status: "pending", provider: null, message: "Checking session...", data: null };
  }

  if (sessionError) {
    return {
      status: "failed",
      provider: null,
      message: sessionError.message ?? "Failed to fetch session",
      data: sessionError,
    };
  }

  if (session) {
    return { status: "success", provider: null, message: "Active session found", data: session };
  }

  return flow;
}
