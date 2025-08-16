"use client";

import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiExpress, SiTailwindcss, SiPostgresql, SiOpencv, SiPostman } from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  link: string;
}

interface SkillsProps {
  programmingLanguages: Skill[];
  webDevelopment: Skill[];
  tools: Skill[];
}


const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block z-0 overflow-visible">
    {children}
    <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 z-[-1] rounded-sm"></span>
  </span>
);

export default function Skills({ programmingLanguages, webDevelopment, tools }: SkillsProps) {
  const renderSkillGrid = (skills: Skill[]) => (
    <div className="grid grid-cols-2 gap-6">
      {skills.map((skill, i) => (
        <a
          key={i}
          href={skill.link}
          title={skill.name}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center bg-card paper-shadow rounded-xl p-6 transition-transform duration-300 hover:scale-105 ${skill.color}`}
        >
          {skill.icon}
        </a>
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="handwritten text-6xl font-bold text-foreground mb-12 text-center transform -rotate-1">
          <Highlight>My Skills</Highlight>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 inline-block relative">
              <span className="bg-yellow-200 px-3 py-1 rounded">Programming Languages</span>
            </h3>
            {renderSkillGrid(programmingLanguages)}
          </div>

          {/* Web Development */}
          <div>
            <h3 className="text-2xl font-bold mb-6 inline-block relative">
              <span className="bg-yellow-200 px-3 py-1 rounded">Web Development</span>
            </h3>
            {renderSkillGrid(webDevelopment)}
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-bold mb-6 inline-block relative">
              <span className="bg-yellow-200 px-3 py-1 rounded">Tools & Others</span>
            </h3>
            {renderSkillGrid(tools)}
          </div>
        </div>
      </div>
    </section>
  );
}
