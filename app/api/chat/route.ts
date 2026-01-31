import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: google('gemini-2.0-flash'),
        messages,
        system: "You are Harsha's personal AI assistant. You help users explore his portfolio of UI/UX design and Full Stack AI development. Be helpful, concise, and professional.",
    });

    return result.toDataStreamResponse();
}
