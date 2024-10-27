import { Prisma } from "@prisma/client"

export const createUserActionAndPost = (
    userId: string,
    action: string,
    date: string,
) => {
    return Prisma.validator<Prisma.UserActionsCreateInput>()({
        user_id: userId,
        action,
        date,
    })
}