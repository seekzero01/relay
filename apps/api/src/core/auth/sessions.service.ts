import {auth} from "@repo/auth/server";
import {Injectable} from "@nestjs/common";

@Injectable()
export class SessionsService {
    constructor(private readonly authInstance: typeof auth) {}

    async listSessions(headers: Headers) {
        return this.authInstance.api.listSessions({ headers });
    }

    async revokeSession(token: string, headers: Headers) {
        return this.authInstance.api.revokeSession({ body: { token }, headers });
    }

    async revokeAllSessions(headers: Headers) {
        return this.authInstance.api.revokeSessions({ headers });
    }

    async revokeOtherSessions(headers: Headers) {
        return this.authInstance.api.revokeOtherSessions({ headers });
    }
}