"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LoginAction(formdata: FormData) {
    const username = formdata.get('username') as string;
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string;

    if (!username || !email || !password) {
        throw new Error("All Field Are Required !!");
    }

    if (!email.includes('@') || !email.includes('.')) {
        throw new Error("Invalid Email Address !!");
    }

    if (password.length < 6) {
        throw new Error("Password must be at least 6 characters.");
    }

    // if (email === "admin@gmail.com" && password === "123456") {
    const cookie = await cookies();
    cookie.set("user", JSON.stringify({ username, email, password }), {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
    });

    redirect('/dashboard');
    // }
    // else {
    //     throw new Error("Invalid Credentials !!");
    // }
}