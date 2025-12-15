"use client";

import * as React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity mb-4"
              >
                Neha Durugkar
              </button>
              <p className="text-sm text-muted-foreground">
                Biochemist | Data Analyst | Entrepreneur
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Bridging science, data, and creativity.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Education", href: "#education" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex gap-2 mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.open("https://www.linkedin.com/in/neha-durugkar-76a38251", "_blank")}
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.open("https://github.com/NehaMiSeq", "_blank")}
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => window.location.href = "mailto:neha21d@gmail.com"}
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Let's connect and explore opportunities together.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left" suppressHydrationWarning>
                © {currentYear} Neha Durugkar. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Built with <Heart className="h-3 w-3 text-accent fill-accent" /> using Next.js & shadcn/ui
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
