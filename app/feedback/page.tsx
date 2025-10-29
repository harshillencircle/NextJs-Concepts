import { Metadata } from "next";
import { FeedbackAction } from "../action/feedbackaction";
import { feedbackStore } from "../data/feedbacks";

export const metadata: Metadata = {
    title: "Feedback Page",
    description: "This Is Feedback page"
};

export default async function FeedbackForm() {
    const feedbackList = feedbackStore;

    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Feedback Form</h2>
                <div>
                    <form action={FeedbackAction} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Name:
                                <input type="text" name="name" placeholder="Enter Name" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email:
                                <input type="email" name="email" placeholder="Enter Email Address" required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Message:
                                <textarea name="message" placeholder="Enter Message ..." required className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </label>
                        </div>
                        <div className="text-center">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="py-10 px-4">
                <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Feedback Lists</h3>
                    <ul className="space-y-4">
                        {feedbackList.length === 0 ? (
                            <p className="text-gray-500 text-center italic">No Feeedback.</p>
                        ) : (
                            feedbackList.map((feedback) => (
                                <li key={feedback.id} className="border border-gray-200 rounded-md p-4 hover:shadow-sm transition-shadow">
                                    <p className="text-lg font-medium text-gray-800">{feedback.name}</p>
                                    <p className="text-gray-600 mt-1">{feedback.message}</p>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}