"use client";

import { motion } from "framer-motion";
import meImg from "@/assets/me.jpg"; // Make sure path is correct

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block z-0 overflow-visible">
    {children}
    <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 z-[-1] rounded-sm"></span>
  </span>
);

export default function Aboutme() {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card paper-shadow p-8 md:p-12 organic-border transform -rotate-1 overflow-visible"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
            <img
              src={meImg}
              alt="Krishna Pratap Singh Chauhan"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-yellow-200 shadow-lg"
            />
            </div>

            {/* Text */}
            <div className="overflow-visible">
              <h2 className="handwritten text-6xl font-bold text-foreground mb-8 transform rotate-1">
                About Me
              </h2>

              <div className="space-y-6 casual-text text-lg leading-relaxed text-foreground overflow-visible">
                <p>
                  I'm <Highlight>Krishna Pratap Singh Chauhan</Highlight>, a student of <Highlight>AKTU University</Highlight>. 
                  Passionate about <Highlight>Full Stack Development</Highlight>, I enjoy building projects that combine design and functionality to solve real-world problems.
                </p>

                <p>
                  I'm also a <Highlight>Tech Enthusiast</Highlight> and a learner in <Highlight>Artificial Intelligence & Machine Learning</Highlight>, 
                  constantly exploring new technologies and improving my skills.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
