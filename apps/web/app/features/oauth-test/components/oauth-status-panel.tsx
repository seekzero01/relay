import type { FlowState } from "@/features/oauth-test/lib/use-oauth-test-flow";

const statusStyles = {
  idle: "border-white/10 text-white/45",
  pending: "border-amber-300/30 text-amber-100",
  success: "border-emerald-300/30 text-emerald-100",
  failed: "border-red-300/30 text-red-100",
};

export function OAuthStatusPanel({ flow }: { flow: FlowState }) {
  if (flow.status === "idle") {
    return null;
  }

  return (
    <div className={`mt-5 rounded-lg border bg-white/[0.03] p-3 text-left text-xs ${statusStyles[flow.status]}`}>
      <p className="font-medium">{flow.message}</p>
      {flow.data !== null && (
        <pre className="mt-3 max-h-32 overflow-auto rounded-md bg-black/30 p-3 text-[11px] leading-relaxed text-white/65">
          {JSON.stringify(flow.data, null, 2)}
        </pre>
      )}
    </div>
  );
}
