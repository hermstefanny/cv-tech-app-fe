import { Prisma } from "@prisma/client"

export const createUserActionAndPost = (
    sessionId: string,
    action: string,
    date: string,
) => {
    return Prisma.validator<Prisma.UserActionsCreateInput>()({
        session_id: sessionId,
        action,
        date,
    })
}