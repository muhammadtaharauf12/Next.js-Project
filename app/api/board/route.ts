import { NextResponse } from "next/server";
import { createDefaultBoard } from "@/lib/createDefaultBoard";

export async function POST(req: Request) {
    try {
        const { userId } = await req.json();

        if (!userId) {
            return NextResponse.json(
                { error: "User ID is required" },
                { status: 400 }
            );
        }

        const board = await createDefaultBoard(userId);

        return NextResponse.json(board);
    } catch (error) {
        console.log("BOARD ERROR:", error);

        return NextResponse.json(
            { error: "Failed to create board" },
            { status: 500 }
        );
    }
}