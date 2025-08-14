"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, X } from "lucide-react";

export default function Hero({ isLoaded }: { isLoaded: boolean }) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-20"
      id="hero"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name with permanent highlighter */}
        <h1
          className="handwritten text-8xl md:text-9xl font-bold text-foreground mb-6 transform -rotate-1 inline-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="relative inline-block">
            Krishna
            <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 -z-10 rounded-sm pointer-events-none"></span>
          </div>
        </h1>

        {/* Title */}
        <motion.p
          className="handwritten text-4xl md:text-5xl text-muted-foreground transform rotate-1 mb-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Resume Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://drive.google.com/file/d/1FKKXhDfNrv0ErA4Wy7AuuLA2KO5lZ9ap/view?usp=drivesdk"
            className="handwritten text-xl text-foreground bg-yellow-200 px-6 py-3 rounded transition-all duration-300 hover:bg-yellow-300"
          >
            Download My Resume
          </a>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          className="flex justify-center gap-6 mt-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* GitHub */}
          <a href="https://github.com/krishnapschauhan" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="handwritten text-xl hover:scale-110 transition-transform">
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </Button>
          </a>

          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/krishnapratapsinghchauhan" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="handwritten text-xl hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </Button>
          </a>

          {/* X */}
          <a href="https://x.com/KrishnaCha54928" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="handwritten text-xl hover:scale-110 transition-transform">
              <X className="w-6 h-6 mr-2" />
              X
            </Button>
          </a>

          {/* Telegram */}
          <a href="https://t.me/krishnapschauhan" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="handwritten text-xl hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                <path d="M9.75 18.75l.58-4.14 7.67-6.93-9.84 5.4-4.33-1.36c-.94-.3-.96-1.6.02-1.94l17.27-6.36c.78-.29 1.6.42 1.36 1.22l-3.1 11.14c-.21.77-1.14 1.09-1.79.62l-3.93-2.83-3.66 3.18z" />
              </svg>
              Telegram
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
