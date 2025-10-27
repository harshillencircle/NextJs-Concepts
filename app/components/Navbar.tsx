"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-gray-900 text-white p-4 shadow-md">
            <nav className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-2 sm:space-y-0">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/productpage">Products Api</Link>
            </nav>
        </div>
    )
}