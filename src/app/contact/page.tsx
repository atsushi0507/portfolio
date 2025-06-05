"use client";
import { useState } from "react";
import { sendContactForm } from "@/lib/mail";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);

    const validateForm = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (
            name.trim() &&
            emailRegex.test(email) &&
            category.trim() &&
            message.trim()
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "email") setEmail(value);
        if (name === "category") setCategory(value);
        if (name === "message") setMessage(value);
        validateForm();
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        try {
            // 送信処理は後で実装
            sendContactForm({name, email, category, message});
            setSendSuccess(true);
        } catch (error) {
            console.error(error);
            setSendSuccess(false);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main className="pt-24 max-w-2x1 mx-auto px-4 py-12 text-gray-800 bg-gradient-to-br from-gray-100 to-blue-100">
            <h1 className="text-3x1 font-bold mb-8  border-b-4 border-blue-500 inline-block">Contact</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="font-semibold text-lg" htmlFor="name">Name:</label>
                <input
                    className="border border-gray-300 rounded px-4 py-2"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />

                <label className="font-semibold text-lg" htmlFor="emai">Email:</label>
                <input
                    className="border border-gray-300 rounded px-4 py-2"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />

                <label className="font-semibold text-lg" htmlFor="category">Category:</label>
                <select
                    className="border border-gray-300 rounded px-4 py-2"
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                >
                    <option value="">Select a category</option>
                    <option value="question">私について質問したい</option>
                    <option value="analysis">データ分析について質問したい</option>
                    <option value="chatbot">Chat-GPTの活用について質問したい</option>
                    <option value="dashboard">ダッシュボード作成について質問したい</option>
                    <option value="other">その他</option>
                </select>

                <label className="font-semibold text-lg" htmlFor="message">Message:</label>
                <textarea
                    className="border border-gray-300 rounded px-4 py-2 h-40"
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    disabled={!isFormValid || isSending}
                    className={`mt-4 px-6 py-2 rounded text-whitefont-semibold transition ${
                        isFormValid && !isSending
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    {isSending ? "Sending..." : "Send"}
                </button>

                {sendSuccess !== null && (
                    <div
                        className={`mt-6 text-center font-bold &{
                            sendSuccess ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {sendSuccess ? "送信に成功しました！" : "送信に失敗しました。もう一度お試しください。"}
                    </div>
                )}
            </form>
        </main>
    );
};

export default ContactPage;