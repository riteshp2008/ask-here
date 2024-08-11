"use client";
import React from "react";
import { Message, useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const { messages, handleInputChange, handleSubmit, input, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });
  return (
    <div className="relative min-h-full bg-gray-900 flex divide-y divide-gray-700 flex-col justify-between gap-2">
      <div className="flex-1 text-white bg-gray-800 justify-between flex flex-col">
        <Messages messages={messages} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};
