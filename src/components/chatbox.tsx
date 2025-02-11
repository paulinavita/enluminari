"use client";

import { useChat } from "@ai-sdk/react";

import { Chat } from "@/components/ui/chat";

export function ChatWithSuggestions() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
    stop,
  } = useChat();

  return (
    <div className="flex h-[70vh] w-2xl flex-col justify-center">
      <Chat
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={[
          "Generate a simple journal topic to reflect about my day.",
          "Generate a list of weekly journalling prompts.",
          "Give me 5 questions to ask my partner to improve our relationship.",
        ]}
      />
    </div>
  );
}
