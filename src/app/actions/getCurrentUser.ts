import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/app/libs/prismadb";

// all this code is to request the authenticated user's info directly from the db without using an api..i'll just be using 'getSeverSession'
export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        // check if its the correct session and if it really exists..
        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        // check if the authenticated user exists..
        if (!currentUser) {
            return null;
        }

        return currentUser;

    } catch (error: any) {
        return null;
    }
}