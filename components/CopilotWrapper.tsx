"use client";
import React, { useState, useEffect } from "react";

import { CopilotKit, useCopilotReadable } from "@copilotkit/react-core";
import { CopilotPopup, useChatContext } from "@copilotkit/react-ui";
import { useLoading } from "./LoadingContext";
import "@copilotkit/react-ui/styles.css";
import { usePortfolioActions } from "@/lib/copilot-actions";

function PortfolioDataLayer() {
    // Register actions
    usePortfolioActions();

    // Project data
    const projects = [
        {
            title: "Hita",
            description: "Hita is an AI Travel Companion with Autonomous Agency. It goes beyond simple planning by executing bookings and managing itineraries actively. Key features include 'Liquid UI' for adaptive interfaces, agentic workflows for autonomous task completion, and deep personalization based on user travel history.",
            image: "/images/projects/hita.png",
            tags: ["Agentic AI", "Travel Tech", "Autonomous Systems", "Liquid UI"],
            link: "/projects/hita"
        },
        {
            title: "Miraee",
            description: "Miraee is an AI-powered travel companion designed for hyper-personalized itineraries. It focuses on the 'dreaming' phase of travel, using generative AI to visualize destinations and curate experiences that match the user's vague inspirations.",
            image: "/images/projects/miraee.png",
            tags: ["Generative AI", "Travel Inspiration", "Personalization"],
            link: "/projects/miraee"
        },
        {
            title: "Aarna",
            description: "Aarna is a public platform and ecosystem for travel creators. It uses 'Conversational Creation' to help users generate sellable travel experiences from unstructured data (PDFs, images) using AI. The 'Deep Ocean' theme reflects its vast, systemic nature. It solves the problem of complex forms by using AI to interview the user and auto-fill details.",
            image: "/images/projects/aarna.png",
            tags: ["AI Ecosystem", "Public Platform", "Conversational UI", "Deep Ocean Theme"],
            link: "/projects/aarna"
        },
        {
            title: "Pranik",
            description: "Pranik is an AI healthcare companion built on the principle of 'Trust First'. It uses a 'Medical White' theme with soft purple accents to convey calm and professional care. It translates complex medical jargon into simple language, offering a judgment-free zone for patients to ask questions.",
            image: "/images/projects/pranik.png",
            tags: ["AI Healthcare", "Trust Design", "Accessibility", "Medical White Theme"],
            link: "/projects/pranik"
        },
        {
            title: "Mondee",
            description: "Mondee is an enterprise-scale travel marketplace. The design challenge was 'Operational Complexity'—managing thousands of bookings and agent workflows. The solution involved scalable design systems and dense, data-rich interfaces that remain usable.",
            image: "/images/projects/mondee.png",
            tags: ["Enterprise UX", "B2B Travel", "Design Systems", "Scale"],
            link: "/projects/mondee"
        }
    ];

    // Skill data
    const skills = [
        { name: "Agentic AI", level: "Expert", category: "AI Strategy", description: "Designing autonomous systems that can plan and execute tasks (like Hita)." },
        { name: "Enterprise UX", level: "Expert", category: "Design", description: "Building complex, scalable systems for global operations (Mondee)." },
        { name: "Conversational UI", level: "Expert", category: "Interaction", description: "Creating natural language interfaces that replace forms (Aarna)." },
        { name: "Trust Design", level: "Expert", category: "Strategy", description: "Designing for sensitive fields like healthcare where user trust is paramount (Pranik)." },
        { name: "Next.js & React", level: "Advanced", category: "Development", description: "Full-stack implementation capable of building custom layouts and animations." }
    ];

    useCopilotReadable({
        description: "List of Harsha's featured projects",
        value: projects,
    });

    useCopilotReadable({
        description: "List of Harsha's skills and expertise areas",
        value: skills,
    });

    return null;
}

function LiquidSearchTrigger() {
    const { setOpen, open } = useChatContext();
    const { isLoading } = useLoading();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = [
        "View AI Projects",
        "Explore Design Skills",
        "Ask about Hita",
        "Get in Touch",
        "Design Philosophy"
    ];

    useEffect(() => {
        if (open) return;
        const interval = setInterval(() => {
            setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [open, questions.length]);

    if (open || isLoading) return null;

    return (
        <div
            className="liquid-search-trigger"
            onClick={() => setOpen(true)}
        >
            <div className="liquid-search-content">
                <span key={currentQuestionIndex} className="liquid-search-text animate-liquid-fade">
                    {questions[currentQuestionIndex]}
                </span>
            </div>
            <div className="liquid-search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}

function LiquidChatHeader() {
    const { setOpen } = useChatContext();
    return (
        <div className="liquid-chat-header">
            <div className="liquid-header-title">
                Luffy
            </div>
            <div className="liquid-header-controls">
                <button className="liquid-header-btn close" onClick={() => setOpen(false)} title="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
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
            <PortfolioDataLayer />
            {children}
            <CopilotPopup
                instructions="You are Luffy, Harsha's intelligent portfolio assistant. 
                Your goal is to help visitors understand Harsha's senior-level experience in AI and Enterprise UX.
                1. Always use the 'showProjects' tool to visually display projects when asked.
                2. Always use the 'showSkills' tool to visually display skills when asked.
                3. Be concise, professional, and sophisticated.
                4. Focus on outcomes (e.g., 'Designed and shipped...') rather than just tasks.
                5. If asked about specific projects like Aarna or Pranik, provide details about the Problems, Solutions, and Impact."
                labels={{
                    title: "Luffy",
                    initial: "Hello! I'm Luffy. I can help you explore Harsha's work, experience, and skills. What would you like to see?",
                }}
                defaultOpen={false}
                clickOutsideToClose={true}
                Button={LiquidSearchTrigger}
                Header={LiquidChatHeader}
            />
        </CopilotKit>
    );
}
