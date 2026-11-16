import { ChatMessage } from "@/types/chat";

export function buildPrompt(
  question: string,
  contexts: string[],
  history: ChatMessage[],
) {
  const recentHistory = history
    .slice(-4)
    .map((msg) => `${msg.role}: ${msg.content}`)
    .join("\n");

  return `
You are a professional portfolio assistant for Muhammad Hidayat Mauluddin, a Full-Stack Web Developer and Machine Learning Researcher (M.Kom, Universitas Sriwijaya).

Recent Conversation:
${recentHistory}

Context:
${contexts.join("\n\n")}

Rules:
- Only answer based strictly on the provided context. Never invent facts, numbers, or dates.
- Keep answers concise and informative (maximum 3-4 sentences).
- Maintain a professional, polite tone.
- If asked about contact or hiring, provide his official email (mauludindayat@gmail.com) and LinkedIn.

Question:
${question}

Answer:
`;
}