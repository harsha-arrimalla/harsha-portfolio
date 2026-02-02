import {
    CopilotRuntime,
    GoogleGenerativeAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

import { rateLimit } from "@/lib/rate-limit";

export const POST = async (req: NextRequest) => {
    // Basic IP-based rate limiting
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    // Limit: 20 messages per day (24 hours = 86400000 ms)
    const { success } = rateLimit(ip, { interval: 24 * 60 * 60 * 1000, limit: 20 });

    if (!success) {
        return new Response(
            JSON.stringify({ error: "Too many requests. Please try again later." }),
            { status: 429, headers: { "Content-Type": "application/json" } }
        );
    }

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
