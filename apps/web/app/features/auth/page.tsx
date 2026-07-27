import type { Metadata } from "next";
// import { LoginCard } from "@/features/auth";

export const metadata: Metadata = {
    title: "Log in · Relay",
    description: "Sign in to continue to Relay.",
};

export default function LoginPage() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-16">
            {/*<LoginCard />*/}
        </main>
    );
}