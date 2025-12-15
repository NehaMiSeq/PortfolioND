"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.1),transparent_50%)] -z-10" />

      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/IMG_4059.JPG"
                  alt="Neha Durugkar"
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Animated Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Neha Durugkar
            </h1>
            <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Biochemist | Data Analyst | Entrepreneur
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Bridging science, data, and creativity. Research-driven biochemist
            with a passion for data analytics and a decade of entrepreneurial
            experience in the food industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gap-2 text-base"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Neha_CV_English.docx";
                link.download = "Neha_Durugkar_CV.docx";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => window.open("https://www.linkedin.com/in/neha-durugkar-76a38251", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => window.open("https://github.com/NehaMiSeq", "_blank")}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
}
