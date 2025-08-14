"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-4">

        {/* Footer message */}
        <p className="handwritten text-2xl text-foreground">
          Made with <span className="text-red-500">❤️</span> and lots of <span className="text-yellow-500">☕</span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/krishnapschauhan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github className="w-6 h-6 text-foreground" />
          </a>
          <a href="http://www.linkedin.com/in/krishnapratapsinghchauhan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin className="w-6 h-6 text-foreground" />
          </a>
          <a href="mailto:krishnachauhan09875@gmail.com" className="hover:scale-110 transition-transform">
            <Mail className="w-6 h-6 text-foreground" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-6"></div>

        {/* Copyright */}
        <p className="casual-text text-sm text-muted-foreground mt-4">
          © {currentYear} Krishna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
