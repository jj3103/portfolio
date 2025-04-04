import React, { useState, useRef, useEffect } from "react";
import { MessageSquare } from 'lucide-react'
import { fetchChat } from "../../service/api.js"

const Chatbot = () => {
    const [message, setMessage] = useState([])
    const [input, setInput] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const chatBoxRef = useRef(null);


    useEffect(() => {
        chatBoxRef.current?.scrollTo({ top: chatBoxRef.current.scrollHeight, behavior: "smooth" });
    }, [message]);


    const sendMessage = async () => {
        if (!input.trim()) return;

        if (loading) return
        setLoading(true)

        const newMessages = [...message, { sender: "user", text: input }]
        setMessage(newMessages)

        const botReply = await fetchChat(input)
        setMessage([...newMessages, { sender: "bot", text: botReply }]);

        setInput("")
        setLoading(false)
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ position: "fixed" }}
                className="fixed bottom-14 right-3 sm:bottom-10 sm:right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                <MessageSquare className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="fixed bottom-16 right-6 sm:bottom-20 sm:right-10 w-[90%] max-w-sm bg-white border border-gray-300 rounded-lg shadow-xl">
                    <div className="bg-blue-500 text-white p-3 font-semibold text-lg rounded-t-lg flex justify-between items-center">
                        <span>Chatbot</span>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-75">✖</button>
                    </div>
                    <div ref={chatBoxRef} className="h-72 sm:h-80 overflow-y-auto p-3 bg-gray-100 rounded-b-lg">
                        {message.map((msg, index) => (
                            <div key={index} className={`p-2 my-1 rounded-lg max-w-[75%] ${msg.sender === "user" ? "ml-auto bg-blue-500 text-white" : "mr-auto bg-gray-300 text-black"}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="p-3 flex gap-2 bg-white">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            onClick={sendMessage}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chatbot;