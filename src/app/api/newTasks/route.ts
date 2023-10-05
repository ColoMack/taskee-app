import { NextResponse } from "next/server";
import prisma from "@prisma/client";

export async function POST(
    request: Request
) {
    const body = await request.json()

    const {taskName} = body

    const task = await prisma.task.create({
        data:{
            taskName,
        }
    })
    return NextResponse.json(task)
}