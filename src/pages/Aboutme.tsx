"use client";

import { motion } from "framer-motion";
import me from "../assets/me.jpg";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block z-0 overflow-visible">
    {children}
    <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 z-[-1] rounded-sm"></span>
  </span>
);

export default function Aboutme() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-24 py-28"
    >
      {/* Left side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <img
          src={me}
          alt="Me"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-yellow-300 object-cover"
        />
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-6xl font-bold mb-6">
          <Highlight>Hello!</Highlight>
        </h2>

        {/* Always visible (short version) */}
        <p className="text-lg leading-relaxed text-foreground">
           I’m <Highlight>Krishna Pratap Singh Chauhan</Highlight>, currently a
          student at <Highlight>AKTU University</Highlight>and passionate about{" "}
          <Highlight>Full Stack Development</Highlight> and solving real-world
          problems through clean, user-friendly projects.
        </p>

        {/* Extra details visible only on desktop */}
        <p className="mt-4 text-lg leading-relaxed text-foreground hidden md:block">
          I enjoy working with <Highlight>React</Highlight>,{" "}
          <Highlight>Tailwind</Highlight>, and <Highlight>Node</Highlight>.  
          Beyond coding, I’m also a <Highlight>Tech Enthusiast</Highlight>{" "}
          exploring <Highlight>Artificial Intelligence & Machine Learning</Highlight>, 
          constantly learning new technologies and improving my problem-solving skills.
        </p>
      </motion.div>
    </section>
  );
}
