"use client";

import { Code2 } from "lucide-react";

interface ExperienceItem {
  icon: any;
  title: string;
  company: string;
  duration: string;
  description: string[]; // now description is an array for bullet points
  certificateLink?: string; // optional link for certificate
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="py-32 px-6 bg-background" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="handwritten text-6xl font-bold text-foreground mb-20 text-center transform -rotate-1">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

          <div className="space-y-24">
            {experience.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline pin */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background z-10 animate-pulse"></div>

                  {/* Content card */}
                  <div
                    className={`w-full md:w-6/12 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="bg-card paper-shadow p-8 organic-border transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <Icon className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="handwritten text-3xl font-bold text-foreground mb-3">
                            {exp.title}
                          </h3>
                          <p className="casual-text text-lg font-semibold text-muted-foreground mb-4">
                            <span className="bg-yellow-200 px-2 py-1 rounded">
                              {exp.company}
                            </span>{" "}
                            • {exp.duration}
                          </p>

                          <ul className="casual-text text-sm text-muted-foreground mb-4 list-disc list-inside space-y-1">
                            {exp.description.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>

                          {exp.certificateLink && (
                            <a
                              href={exp.certificateLink.startsWith("http") ? exp.certificateLink : `https://${exp.certificateLink}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="handwritten text-sm bg-yellow-200 px-5 py-2 rounded hover:bg-yellow-300 transition-all inline-block mt-2 relative z-20 text-center"
                            >
                              View Certificate
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
