"use client"

import {useSession, signOut} from "@repo/auth/client";
import {useRouter} from "next/navigation";

export default function TestPage() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/oauth-test");
                },
            },
        });
    }

    return (
        <div>
            <p>Test Page</p>
            <div>
                <h2>Session:</h2>
                {JSON.stringify(session?.user, null, 2)}
            </div>
            <div>
                <h2>User:</h2>
                {JSON.stringify(session?.session, null, 2)}
            </div>
            <button onClick={() => handleSignOut()}>
                Sign out
            </button>
        </div>
    )
}