import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the AI client
// Note: In a production environment, you should proxy these requests through a backend
// to protect your API key. For this demo, we use it client-side.
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are "CyberSage", the lead enrollment advisor for the "Ethical Hacking For Absolute Beginners" course.
Your goal is to persuade visitors to enroll in the course ($20 USD or 30,000 NGN).

Key Course Details:
- Duration: 1 Month (4 Weeks).
- Level: Absolute Beginner (No coding experience required).
- Content: Linux basics, Network Scanning (Nmap), Web Vulnerabilities (SQLi, XSS), Capstone Project.
- Value: Career starter, hands-on labs, certificate of completion.
- Tone: Professional, encouraging, slightly urgent (limited spots), but trustworthy.
- Answers: Keep them short (under 50 words), punchy, and sales-focused. Use emojis occasionally.

If asked about price, mention both $20 and 30,000 Naira.
If asked about prerequisites, emphasize that a laptop and internet are all that's needed.
Always end with a call to action or a question to keep them engaged.
`;

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm currently offline (API Key missing). Please contact support manually!";
  }

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({
      message: userMessage,
    });

    return response.text || "I couldn't process that. Try asking about the curriculum!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please check your internet or try again later.";
  }
};