"use server";

import { revalidatePath } from "next/cache";
import { feedbackStore } from "../data/feedbacks";

export async function FeedbackAction(formdata: FormData) {
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const message = formdata.get('message') as string;

    if (!name || !email || !message) {
        throw new Error("All Fields Are Required !!");
    }

    if (!email.includes('@') || !email.includes('.')) {
        throw new Error("Invalid Email Address !!");
    }

    feedbackStore.push({
        id: Date.now().toString(),
        name,
        email,
        message,
    });

    revalidatePath('/feedback');
}