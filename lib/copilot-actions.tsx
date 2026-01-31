"use client";

import { useCopilotAction } from "@copilotkit/react-core";
import { ProjectCard } from "@/components/SmartCards/ProjectCard";
import { SkillCard } from "@/components/SmartCards/SkillCard";

export function usePortfolioActions() {
    // Action to show projects
    useCopilotAction({
        name: "showProjects",
        description: "Displays project cards. CALL THIS LAST in your response. Do not repeat text after calling this.",
        parameters: [], // Remove parameters so AI doesn't dump data as text
        handler: async () => { },
        render: () => {
            const projects = [
                {
                    title: "Hita",
                    description: "Hita is an AI Travel Companion with Autonomous Agency.",
                    image: "/images/projects/hita.png",
                    tags: ["Agentic AI", "Travel Tech", "Autonomous Systems"],
                    link: "/projects/hita"
                },
                {
                    title: "Miraee",
                    description: "Miraee is an AI-powered travel companion for personalized itineraries.",
                    image: "/images/projects/miraee.png",
                    tags: ["Generative AI", "Travel Inspiration"],
                    link: "/projects/miraee"
                },
                {
                    title: "Aarna",
                    description: "Aarna is a public platform for travel creators.",
                    image: "/images/projects/aarna.png",
                    tags: ["AI Ecosystem", "Public Platform"],
                    link: "/projects/aarna"
                },
                {
                    title: "Pranik",
                    description: "Pranik is an AI healthcare companion.",
                    image: "/images/projects/pranik.png",
                    tags: ["AI Healthcare", "Trust Design"],
                    link: "/projects/pranik"
                },
                {
                    title: "Mondee",
                    description: "Mondee is an enterprise-scale travel marketplace.",
                    image: "/images/projects/mondee.png",
                    tags: ["Enterprise UX", "B2B Travel"],
                    link: "/projects/mondee"
                }
            ];

            return (
                <div
                    className="flex overflow-x-auto gap-4 w-full p-4"
                    data-lenis-prevent
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        overflowX: 'scroll',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {projects.map((project: any, index: number) => (
                        <div key={index} className="luffy-card-item">
                            <ProjectCard {...project} variant="light" />
                        </div>
                    ))}
                </div>
            );
        },
    });

    // Action to show skills
    useCopilotAction({
        name: "showSkills",
        description: "Displays skill cards. CALL THIS LAST in your response. Do not repeat text after calling this.",
        parameters: [],
        handler: async () => { },
        render: () => {
            const skills = [
                { name: "Agentic AI", level: "Expert", category: "AI Strategy", description: "Designing autonomous systems." },
                { name: "Enterprise UX", level: "Expert", category: "Design", description: "Building complex systems." },
                { name: "Conversational UI", level: "Expert", category: "Interaction", description: "Creating natural language interfaces." },
                { name: "Trust Design", level: "Expert", category: "Strategy", description: "Designing for sensitive fields." },
                { name: "Next.js & React", level: "Advanced", category: "Development", description: "Full-stack implementation." }
            ];

            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-4">
                    {skills.map((skill: any, index: number) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            );
        },
    });
}
