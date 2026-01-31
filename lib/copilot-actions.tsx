"use client";

import { useCopilotAction } from "@copilotkit/react-core";
import { ProjectCard } from "@/components/SmartCards/ProjectCard";
import { SkillCard } from "@/components/SmartCards/SkillCard";

export function usePortfolioActions() {
    // Action to show projects
    useCopilotAction({
        name: "showProjects",
        description: "Displays Harsha's key projects as visual smart cards.",
        parameters: [
            {
                name: "projects",
                type: "object[]",
                description: "List of projects to display",
                attributes: [
                    { name: "title", type: "string" },
                    { name: "description", type: "string" },
                    { name: "image", type: "string" },
                    { name: "tags", type: "string[]" },
                    { name: "link", type: "string" },
                ],
            },
        ],
        handler: async (args) => {
            // This handler can perform side effects if needed.
            // For rendering only, it can just log or remain empty.
            console.log("Rendering projects:", args.projects);
        },
        render: (props) => {
            const { projects } = props.args;
            if (!projects) return <></>;
            return (
                <div className="grid grid-cols-1 gap-4 w-full mt-4">
                    {projects.map((project: any, index: number) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            );
        },
    });

    // Action to show skills
    useCopilotAction({
        name: "showSkills",
        description: "Displays Harsha's expertise and technical skills as visual cards.",
        parameters: [
            {
                name: "skills",
                type: "object[]",
                description: "List of skills to display",
                attributes: [
                    { name: "name", type: "string" },
                    { name: "level", type: "string" },
                    { name: "category", type: "string" },
                    { name: "description", type: "string" },
                ],
            },
        ],
        handler: async (args) => {
            console.log("Rendering skills:", args.skills);
        },
        render: (props) => {
            const { skills } = props.args;
            if (!skills) return <></>;
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
