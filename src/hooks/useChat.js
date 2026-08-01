import { useState } from "react";
import dummyResponses from "../data/dummyResponses";

export default function useChat() {
  const [messages, setMessages] = useState([]);

  function sendMessage(text) {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    const aiMessage = {
      sender: "ai",
      text:
        dummyResponses[
          Math.floor(Math.random() * dummyResponses.length)
        ],
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
  }

  return {
    messages,
    sendMessage,
  };
}