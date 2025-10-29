import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white p-6">
            <div>
                <h1 className="text-2xl sm:text-6xl font-extrabold mb-4">
                    About <span className="text-blue-500">My Next.js Site</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6">
                    This project is built with <span className="font-semibold">Next.js</span>,
                    a powerful React framework for building fast and scalable web applications.
                    It’s styled using <span className="font-semibold">Tailwind CSS</span> to ensure a responsive,
                    modern, and developer-friendly design.
                </p>
                <p className="text-lg text-gray-400 mb-6">Next.js is an open-source web development framework created by Vercel that extends the React library to enable the creation of full-stack web applications with server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). It is built on top of React, a JavaScript library for building user interfaces, and provides additional features and optimizations that simplify common development tasks. Next.js is designed to improve performance, search engine optimization (SEO), and developer experience by offering out-of-the-box functionality such as file-based routing, automatic code-splitting, and built-in image optimization.</p>

                <div className="flex flex-col sm:flex-row items-center text-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                    <div className="mb-4 sm:mb-0 sm:mr-6">
                        <Image
                            src="/profile.jpg"
                            alt="Profile Photo"
                            width={320}
                            height={320}
                            className="object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold mb-2">Harshil Limbasiya</h2>
                        <p className="text-gray-400 mb-4">Full-Stack Web Developer • Next.js Enthusiast</p>

                        <p className="text-gray-300 mb-4">
                            Passionate about creating performant, accessible, and user-friendly web experiences.
                            Skilled in React, TypeScript, and Tailwind CSS.
                        </p>
                    </div>
                </div>

                <p className="text-gray-400 mb-8">
                    Our mission is to deliver elegant, high-performance websites that are simple to maintain and delightful to use.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}