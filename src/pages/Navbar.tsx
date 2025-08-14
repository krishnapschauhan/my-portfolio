"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  navItems: { name: string; id: string }[];
  scrollToSection: (id: string) => void;
}

export default function Navbar({ navItems, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border paper-shadow bg-background">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="handwritten text-2xl font-bold text-foreground cursor-pointer" onClick={() => scrollToSection("hero")}>
          Krishna
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="handwritten text-xl text-foreground relative px-3 py-1 rounded transition-colors duration-300 hover:bg-yellow-200 hover:text-foreground"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left handwritten text-xl text-foreground px-3 py-2 rounded transition-colors duration-300 hover:bg-yellow-200 hover:text-foreground"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
