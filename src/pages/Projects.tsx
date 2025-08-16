"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block z-0 overflow-visible">
    {children}
    <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 z-[-1] rounded-sm"></span>
  </span>
);

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-28 px-6 bg-background/40" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="handwritten text-6xl font-bold text-center text-foreground mb-16 tracking-wide"
        >
          <Highlight>My Projects</Highlight>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="paper-shadow hover:sticky-shadow transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 organic-border overflow-hidden bg-card/90 backdrop-blur">
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  {/* Link button */}
                  <div className="absolute top-4 right-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-95 hover:opacity-100 shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6">
                  <h3 className="handwritten text-2xl font-bold text-foreground mb-3">
                    <Highlight>{project.title}</Highlight>
                  </h3>
                  <p className="casual-text text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="casual-text text-xs bg-yellow-100 text-foreground px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
