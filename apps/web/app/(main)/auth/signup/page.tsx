import type { Metadata } from "next";
import Image from "next/image";
import {SignupCard} from "@/features/auth/components/SignupCard";

export const metadata: Metadata = {
    title: "Create your Relay account",
    description: "Start building your team's AI-powered knowledge base.",
};

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black px-4 py-16">
            <Image
                src="/logo/logo.svg"
                alt="Relay"
                width={40}
                height={40}
                priority
            />

            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-semibold text-neutral-50">
                    Create your Relay account
                </h1>
                <p className="text-sm text-neutral-400">
                    Start building your team&apos;s AI-powered knowledge base.
                </p>
            </div>

            <SignupCard />
        </main>
    );
}

export default Page;