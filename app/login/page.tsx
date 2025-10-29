import { LoginAction } from "../action/loginaction";

export default function LoginPage() {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-950 px-4">
            <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-blue-500">Login</h2>
                </div>
                <div>
                    <form action={LoginAction} className="space-y-5">
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Username:
                                <input type="text" name="username" placeholder="Enter Username" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Email:
                                <input type="email" name="email" placeholder="Enter Email" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Password:
                                <input type="password" name="password" placeholder="Password" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}