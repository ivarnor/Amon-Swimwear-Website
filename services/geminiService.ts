import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are "Aria", the premier Virtual Stylist for AMON Swim Wear, a luxury high-end swimwear brand owned by Anne Marie.
        
        Brand Identity:
        - Sophisticated, timeless, and empowering.
        - Colors: Gold, Sand, Deep Ocean Blue, Black, White.
        - Vibe: French Riviera, Tulum, Maldives luxury.
        
        Your Goal:
        - Assist customers in finding the perfect swimwear based on their body type, destination, and personal style.
        - Be concise, elegant, and helpful. 
        - If asked about prices, give a range between $150 - $400 USD.
        - If asked about Anne Marie, mention she is the visionary designer who blends architectural lines with fluid fabrics.
        
        Tone:
        - Professional, warm, fashion-forward, and slightly exclusive.
        `,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session", error);
  }
};

export const sendMessageToStylist = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "I am currently unavailable. Please try again later.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I'm having trouble connecting to the fashion archives. Please try again.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, but I cannot process your request at the moment.";
  }
};