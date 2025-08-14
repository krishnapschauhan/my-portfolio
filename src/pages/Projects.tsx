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

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="handwritten text-6xl font-bold text-foreground mb-12 text-center transform rotate-1">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotate: Math.random() * 4 - 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <Card className="paper-shadow hover:sticky-shadow transition-all duration-300 transform hover:-translate-y-2 hover:rotate-0 organic-border overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="opacity-90">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="handwritten text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="casual-text text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="casual-text text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
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
