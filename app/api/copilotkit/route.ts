import {
    CopilotRuntime,
    GoogleGenerativeAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
        return new Response(
            JSON.stringify({ error: "GOOGLE_GENERATIVE_AI_API_KEY is missing" }),
            { status: 500 }
        );
    }

    const googleAdapter = new GoogleGenerativeAIAdapter({
        model: "gemini-2.0-flash",
        apiKey: apiKey,
    });

    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
        runtime: new CopilotRuntime(),
        serviceAdapter: googleAdapter,
        endpoint: "/api/copilotkit",
    });

    return handleRequest(req);
};
