"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { type useChat } from "ai/react";
import { useState, useEffect } from "react";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
  input: string;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  setInput: SetInput;
}

export const ChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
  setInput,
}: ChatInputProps) => {
  const [rows, setRows] = useState(1);

  useEffect(() => {
    const lineCount = input.split("\n").length;
    setRows(Math.min(Math.max(lineCount, 1), 5));
  }, [input]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your question..."
            className="w-full px-4 py-3 text-white placeholder-gray-500 bg-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Send className="w-5 h-5 " />
          </button>
        </form>
      </div>
    </div>
  );
};
