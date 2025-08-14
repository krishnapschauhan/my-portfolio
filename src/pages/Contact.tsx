"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { send } from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    // Live email validation
    if (e.target.name === "email") {
      if (!isValidEmail(e.target.value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (!isValidEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
     await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );


      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setEmailError("");
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="handwritten text-6xl font-bold text-foreground mb-12 text-center transform rotate-1">
          Let's Connect
        </h2>
        <Card className="paper-shadow p-8 organic-border transform -rotate-1 animate-fadeInUp">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="handwritten text-xl text-foreground mb-2 block">Your Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tell me your name..."
                required
                className="casual-text border-2 border-dashed border-border focus:border-primary bg-background/50 focus:scale-105 transition-transform duration-200"
              />
            </div>
            <div>
              <label className="handwritten text-xl text-foreground mb-2 block">Email Address</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="casual-text border-2 border-dashed border-border focus:border-primary bg-background/50 focus:scale-105 transition-transform duration-200"
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label className="handwritten text-xl text-foreground mb-2 block">Your Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="What would you like to chat about?"
                required
                className="casual-text border-2 border-dashed border-border focus:border-primary bg-background/50 resize-none focus:scale-105 transition-transform duration-200"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="handwritten text-xl w-full transform hover:scale-105 transition-all duration-300"
            >
              <Send className="w-5 h-5 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {success && <p className="text-center mt-4 text-green-500">{success}</p>}
          </form>
        </Card>
      </div>
    </section>
  );
}
