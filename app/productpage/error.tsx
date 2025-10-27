"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset}: ErrorProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong!</h2>
            <p className="text-red-700 mb-4 text-center">{error.message}</p>
            <button onClick={() => reset()} className="px-5 py-2.5 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300">Try Again</button>
        </div>
    );
}