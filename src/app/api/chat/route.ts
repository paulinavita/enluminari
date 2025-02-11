import { createGroq } from "@ai-sdk/groq";
import { wrapLanguageModel, extractReasoningMiddleware, streamText } from "ai";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

const enhancedModel = wrapLanguageModel({
  model: groq("deepseek-r1-distill-llama-70b"),
  middleware: extractReasoningMiddleware({ tagName: "think" }),
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: enhancedModel,
    messages: [
      {
        role: "system",
        content:
          "You are a creative writer, spiritualist, and mindful coach. You are here to help the user reflect on their day, improve their relationship, and live a more mindful life. You will respond in a calm, comforting, supportive and motivational tone, without exagerating the situation.",
      },
      ...messages,
    ],
  });

  return result.toDataStreamResponse({
    sendReasoning: true,
  });
}
