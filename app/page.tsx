import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl sm:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-blue-500">My Next.js Site</span>
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          This is a modern web app built with <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span>.  
          Experience fast performance, clean design, and developer-friendly tooling.
        </p>
        <p className="text-lg text-gray-400 mb-8">Next.js is a React framework that enables several extra features, including server-side rendering and static rendering. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.</p>
        <Link
          href="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
