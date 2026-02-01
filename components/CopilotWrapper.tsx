"use client";
import React, { useState, useEffect } from "react";

import { CopilotKit, useCopilotReadable } from "@copilotkit/react-core";
import { CopilotPopup, useChatContext } from "@copilotkit/react-ui";
import { useLoading } from "./LoadingContext";
import "@copilotkit/react-ui/styles.css";
import { usePortfolioActions } from "@/lib/copilot-actions";

function LuffySearchTrigger() {
    const { setOpen, open } = useChatContext();
    const { isLoading } = useLoading();
    const [currentPrompt, setCurrentPrompt] = useState(0);

    const prompts = [
        "Ask about my skills",
        "Show me my projects",
        "What is my experience?",
        "Talk to Luffy AI assistant"
    ];

    useEffect(() => {
        const handleExternalOpen = () => setOpen(true);
        window.addEventListener('open-luffy-chat', handleExternalOpen);

        if (open || isLoading) return;
        const interval = setInterval(() => {
            setCurrentPrompt((prev) => (prev + 1) % prompts.length);
        }, 4000);
        return () => {
            clearInterval(interval);
            window.removeEventListener('open-luffy-chat', handleExternalOpen);
        };
    }, [open, isLoading, prompts.length, setOpen]);

    if (open || isLoading) return null;

    return (
        <div
            className="luffy-search-trigger group relative h-16 flex items-center"
            onClick={() => setOpen(true)}
        >
            {/* Suggested Question Bubble - Hidden on mobile to keep UI clean */}
            <div className="absolute right-[calc(100%+16px)] hidden md:flex items-center pointer-events-none group-hover:scale-[1.02] transition-transform duration-300">
                <div className="relative">
                    {/* Main Bubble */}
                    <div className="bg-white/95 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-white/40 flex flex-col min-w-[180px]">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-1">
                            Luffy's Headlines
                        </span>
                        <div className="h-5 overflow-hidden relative">
                            <div
                                className="transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                                style={{ transform: `translateY(-${currentPrompt * 20}px)` }}
                            >
                                {prompts.map((p, i) => (
                                    <div key={i} className="h-5 flex items-center">
                                        <span className="text-[14px] font-display font-black text-[#1A1A1A] whitespace-nowrap leading-none">
                                            {p}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Centered Pointer Arrow */}
                    <div className="absolute top-1/2 -right-[6px] -translate-y-1/2 w-3 h-3 bg-white/95 rotate-45 border-r border-t border-white/40 shadow-sm"></div>
                </div>
            </div>

            <div className="w-16 h-16 bg-[#FCD34D] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:rotate-[15deg] hover:scale-110 border-4 border-white cursor-pointer active:scale-95 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A1A1A] relative z-10">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            </div>
        </div>
    );
}

function LuffyChatHeader() {
    const { setOpen } = useChatContext();
    return (
        <>
            <ScrollManager />
            <div className="luffy-chat-header bg-[#1A1A1A] p-4 flex items-center justify-between rounded-t-3xl">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-green-600 flex items-center justify-center border-2 border-[#333]">
                        <span className="text-[10px] font-bold text-white">AI</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-display font-black text-sm leading-tight tracking-tight">Luffy</span>
                        <span className="text-white/40 font-urbanist text-[10px] leading-tight">Always active</span>
                    </div>
                </div>

                <button
                    className="text-white/60 hover:text-white transition-colors"
                    onClick={() => setOpen(false)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </>
    );
}

// Internal component to manage scroll behavior correctly using ChatContext
function ScrollManager() {
    const { open } = useChatContext();

    useEffect(() => {
        if (!open) return;

        let observer: MutationObserver | null = null;
        let intervalId: NodeJS.Timeout;

        const setupScrollBehavior = () => {
            const messagesContainer = document.querySelector('.copilotKitMessagesContainer');
            const chatWindow = document.querySelector('.copilotKitWindow');

            if (chatWindow && !chatWindow.hasAttribute('data-lenis-prevent')) {
                chatWindow.setAttribute('data-lenis-prevent', 'true');
            }

            if (messagesContainer) {
                if (!messagesContainer.hasAttribute('data-lenis-prevent')) {
                    messagesContainer.setAttribute('data-lenis-prevent', 'true');
                }

                // Force initial scroll
                messagesContainer.scrollTop = messagesContainer.scrollHeight;

                // Watch for changes (new messages, streaming tokens, OR attribute changes)
                observer = new MutationObserver(() => {
                    const scrollToBottom = () => {
                        if (messagesContainer) {
                            const lastChild = messagesContainer.lastElementChild;
                            if (lastChild) {
                                lastChild.scrollIntoView({ behavior: 'auto', block: 'end' });
                            } else {
                                messagesContainer.scrollTop = messagesContainer.scrollHeight + 1000;
                            }
                        }
                    };

                    requestAnimationFrame(scrollToBottom);
                    setTimeout(scrollToBottom, 50);
                    setTimeout(scrollToBottom, 150);
                    setTimeout(scrollToBottom, 300);
                    setTimeout(scrollToBottom, 600);
                    setTimeout(scrollToBottom, 1000); // Final insurance scroll
                });

                observer.observe(messagesContainer, {
                    childList: true,
                    subtree: true,
                    characterData: true,
                    attributes: true // Added to catch style/class updates
                });

                // Once we've set up the observer, we can stop the interval for THIS session
                clearInterval(intervalId);
            }
        };

        // Run periodically until we find the container
        intervalId = setInterval(setupScrollBehavior, 300);
        setupScrollBehavior();

        return () => {
            clearInterval(intervalId);
            if (observer) observer.disconnect();
        };
    }, [open]);

    return null;
}

function PortfolioKnowledge() {
    useCopilotReadable({
        description: "Core information about Harsha and his portfolio. Use this to answer biographical or professional questions.",
        value: {
            owner: "Harsha",
            role: "UI/UX Designer & AI - Full Stack Developer",
            philosophy: "Designing intelligent products people trust. Balancing AI intelligence with human empathy.",
            experience: [
                { company: "Mondee", role: "Product Designer", period: "2023-Present", focus: "Enterprise-scale travel and AI-driven platforms like Miraee, Aarna, and Pranik." },
                { company: "Virtusa", role: "UI/UX Designer", period: "Nov 2022-July 2023", focus: "Client product teams, wireframing, and design system support." },
                { company: "GlobalLogic", role: "UI/UX Designer", period: "Feb 2022-Nov 2022", focus: "Component-based UI work and web/mobile UX fundamentals." },
                { company: "Hita (Parallel)", role: "AI Product Builder", period: "Self-Initiated", focus: "Concept-to-prototype ownership and conversational AI interaction design." }
            ],
            impact: "200+ clients, 50+ projects",
            contact: "Available via the contact form on the website."
        }
    });
    return null;
}

function ActionsRegistry() {
    usePortfolioActions();
    return <PortfolioKnowledge />;
}

export default function CopilotWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CopilotKit
            runtimeUrl="/api/copilotkit"
            showDevConsole={false}
            // @ts-ignore
            showAnnouncement={false}
            enableInspector={false}
        >
            <ActionsRegistry />
            {children}
            <CopilotPopup
                instructions="You are Luffy, Harsha's personal portfolio assistant.
                
                STRICT GUARDRAILS:
                1. You ONLY answer questions about Harsha, his work, his skills, and this portfolio.
                2. If the user asks about ANY other topic (politics, sports, general knowledge, math, etc.), you must politely refuse: 'I'm sorry, I'm only here to talk about Harsha's portfolio.'
                
                RESPONSE TEMPLATE:
                1. [Helpful text intro based on PortfolioKnowledge]
                2. [If applicable, call showProjects or showSkills tool]
                3. [STOP IMMEDIATELY]
                
                CRITICAL:
                - Never repeat intro text.
                - Never summarize after a tool call.
                - Knowledge source is strictly the provided PortfolioKnowledge."
                labels={{
                    title: "Luffy",
                    initial: "Hi! I'm Luffy. I'm here to answer anything about Harsha's work and expertise. How can I help?",
                }}
                defaultOpen={false}
                clickOutsideToClose={true}
                Button={LuffySearchTrigger}
                Header={LuffyChatHeader}
                className="luffy-theme-popup"
            />
        </CopilotKit>
    );
}
