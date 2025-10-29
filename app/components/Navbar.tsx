"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md">
            <div>
                <nav className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/productpage">Products Api</Link>
                    <Link href="/feedback">Feedback</Link>
                    <Link href="/dashboard">Dashboard</Link>
                </nav>
            </div>
            <div>
                <Link href="/login">Login</Link>
            </div>
        </div>
    )
}