import type { GithubOptions } from "better-auth/social-providers";

export const githubProvider: GithubOptions = {
    clientId: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
};