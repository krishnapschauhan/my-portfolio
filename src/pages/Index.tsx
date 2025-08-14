"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  Trophy,
  Heart,
  Coffee,
  Camera,
  Send,
  Menu,
  X
} from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiC, SiExpress, SiTailwindcss, SiOpencv, SiPostman, SiPostgresql } from "react-icons/si";
import Hero from "./HeroSection";
import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const programmingLanguages = [
    { name: "Python", icon: <FaPython size={40} />, color: "sticky-yellow", link: "https://www.python.org/doc/" },
    { name: "C", icon: <SiC size={40} />, color: "sticky-blue", link: "https://devdocs.io/c/" }
  ];

  const webDevelopment = [
    { name: "HTML5", icon: <FaHtml5 size={40} />, color: "sticky-green", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "sticky-pink", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <FaJs size={40} />, color: "sticky-orange", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: <FaReact size={40} />, color: "sticky-yellow", link: "https://react.dev/" },
    { name: "Node.js", icon: <FaNodeJs size={40} />, color: "sticky-blue", link: "https://nodejs.org/en/docs" },
    { name: "Express.js", icon: <SiExpress size={40} />, color: "sticky-green", link: "https://expressjs.com/" },
    { name: "Bootstrap", icon: <FaBootstrap size={40} />, color: "sticky-orange", link: "https://getbootstrap.com/docs/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, color: "sticky-yellow", link: "https://tailwindcss.com/docs" }
  ];

  const tools = [
    { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "sticky-pink", link: "https://www.postgresql.org/docs/" },
    { name: "OpenCV", icon: <SiOpencv size={40} />, color: "sticky-blue", link: "https://docs.opencv.org/" },
    { name: "Git", icon: <FaGitAlt size={40} />, color: "sticky-green", link: "https://git-scm.com/doc" },
    { name: "GitHub", icon: <FaGithub size={40} />, color: "sticky-pink", link: "https://docs.github.com/en" },
    { name: "Postman", icon: <SiPostman size={40} />, color: "sticky-orange", link: "https://learning.postman.com/docs/" }
  ];

  const projects = [
    {
      title: "Base Care",
      description: "A complaint management system for users, admins, and workers. Full-featured portal with user authentication and role-based access control.",
      image: project1,
      tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
      link: "https://base-care.vercel.app/"
    },
    {
      title: "QuickNote App",
      description: "Minimal note-taking web app with headings and descriptions. Clean interface for efficient note organization and management.",
      image: project2,
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "https://krishnapschauhan.github.io/quicknote/"
    },
    {
      title: "Creative Hub",
      description: "A mock web app showcasing creative portfolios with interactive features. Modern design with smooth animations and responsive layout.",
      image: project3,
      tech: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
      link: "#"
    }
  ];

  const experience = [
    {
      icon: Code2,
      title: "Full Stack Developer Intern",
      company: "509 Army Base Workshop, Agra",
      duration: "45 days",
      description: [
        "Developed a complaint management portal for users, admins, and workers.",
        "Implemented role-based functionality and access control.",
        "Built responsive UI components and forms."
      ],
      certificateLink: "https://www.linkedin.com/posts/krishnapratapsinghchauhan_wrapped-up-an-incredible-journey-at-509-army-activity-7356650742041993217-clCo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAdPX4B-PAX-GLPHRGewhE0a0KT6itomSM"
    }
  ];

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About Me", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background paper-bg">
      <Navbar navItems={navItems} scrollToSection={scrollToSection} />

      <Hero isLoaded={isLoaded} />

      <Aboutme />

      <Projects projects={projects} />

      <Experience experience={experience} />

      <Skills programmingLanguages={programmingLanguages} webDevelopment={webDevelopment} tools={tools} />

      <Contact />
     
      <Footer />
    </div>
  );
};

export default Index;
