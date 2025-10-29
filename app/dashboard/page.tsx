import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "This Is Dashboard page"
};

export default async function Dashboard() {
  const store = await cookies();
  const userCookie = store.get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {user ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className={`text-2xl font-semibold mb-2 ${inter.className}`}>Welcome, {user.username} </h2>
          <p className="text-gray-700 mb-4">{user.email}</p>
          <p className="text-gray-700 mb-4">{user.password}</p>
          <form action="/api/logout" method="post">
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </form>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </section>

  );
}