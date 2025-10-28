import { feedbackStore } from "@/app/data/feedbacks";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(feedbackStore);
}