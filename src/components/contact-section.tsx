"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Form submitted! (This is a demo)");
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="container py-12 md:py-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-12 text-center" data-aos="fade-in">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div
            data-aos={isMobile ? "fade-in" : "fade-right"}
            data-aos-duration={isMobile ? 600 : 1000}
          >
            <Card className="h-full border border-white/10 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Here are the ways you can reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div
                  className="flex items-center gap-3 group"
                  data-aos={isMobile ? "fade-in" : "fade-up"}
                  data-aos-delay={isMobile ? 0 : 100}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <a
                    href="mailto:contact@andinoferdi.com"
                    className="text-sm hover:underline group-hover:text-primary transition-colors duration-300"
                  >
                    contact@andinoferdi.com
                  </a>
                </div>
                <div
                  className="flex items-center gap-3 group"
                  data-aos={isMobile ? "fade-in" : "fade-up"}
                  data-aos-delay={isMobile ? 0 : 200}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-sm hover:underline group-hover:text-primary transition-colors duration-300"
                  >
                    +123 456 7890
                  </a>
                </div>
                <div
                  className="flex items-center gap-3 group"
                  data-aos={isMobile ? "fade-in" : "fade-up"}
                  data-aos-delay={isMobile ? 0 : 300}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-sm group-hover:text-primary transition-colors duration-300">
                    Jakarta, Indonesia
                  </span>
                </div>

                <div
                  className="mt-6 relative overflow-hidden rounded-lg"
                  data-aos={isMobile ? "fade-in" : "zoom-in"}
                  data-aos-delay={isMobile ? 0 : 400}
                >
                  <div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">
                        Map location
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            data-aos={isMobile ? "fade-in" : "fade-left"}
            data-aos-duration={isMobile ? 600 : 1000}
          >
            <Card className="border border-white/10 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                >
                  <div
                    className="grid gap-2"
                    data-aos={isMobile ? "fade-in" : "fade-up"}
                    data-aos-delay={isMobile ? 0 : 100}
                  >
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-white/10 focus:border-primary"
                    />
                  </div>
                  <div
                    className="grid gap-2"
                    data-aos={isMobile ? "fade-in" : "fade-up"}
                    data-aos-delay={isMobile ? 0 : 200}
                  >
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="border-white/10 focus:border-primary"
                    />
                  </div>
                  <div
                    className="grid gap-2"
                    data-aos={isMobile ? "fade-in" : "fade-up"}
                    data-aos-delay={isMobile ? 0 : 300}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={4}
                      required
                      className="border-white/10 focus:border-primary"
                    />
                  </div>
                  <div
                    className="relative"
                    data-aos={isMobile ? "fade-in" : "fade-up"}
                    data-aos-delay={isMobile ? 0 : 400}
                  >
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur"></div>
                    <Button
                      type="submit"
                      className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shine"
                    >
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
