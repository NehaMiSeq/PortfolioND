"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neha21d@gmail.com",
      href: "mailto:neha21d@gmail.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/neha-durugkar",
      href: "https://www.linkedin.com/in/neha-durugkar-76a38251",
      color: "accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/NehaMiSeq",
      href: "https://github.com/NehaMiSeq",
      color: "secondary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+45 52617115",
      href: "tel:+4552617115",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or
              just connecting with fellow professionals. Feel free to reach out
              through any of the channels below!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="pt-6">
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${contact.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                      >
                        <Icon className={`h-6 w-6 text-${contact.color}`} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground mb-1">
                          {contact.label}
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you're looking for a biochemist with data analytics skills,
                need consultation on food business operations, or want to discuss
                research opportunities, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = "mailto:neha21d@gmail.com"}
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Neha_CV_English.docx";
                    link.download = "Neha_Durugkar_CV.docx";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="gap-2"
                >
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
