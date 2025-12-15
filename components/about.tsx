"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <div className="order-2 md:order-1">
              <Card className="p-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 overflow-hidden">
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  <Image
                    src="/IMG_4440.JPG"
                    alt="Neha Durugkar - Biochemist and Data Analyst"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a <span className="text-primary font-semibold">biochemist</span> with a
                  deep passion for understanding the molecular mechanisms of life. My research
                  background has equipped me with strong analytical thinking and problem-solving
                  skills.
                </p>
                <p>
                  Currently, I'm expanding my expertise into{" "}
                  <span className="text-accent font-semibold">data analytics</span>, leveraging
                  Python and Jupyter Notebook to extract meaningful insights from complex
                  datasets. My experience with R programming in research has given me a solid
                  foundation in statistical analysis and data visualization.
                </p>
                <p>
                  Beyond the lab and code, I'm a{" "}
                  <span className="text-secondary font-semibold">successful entrepreneur</span>,
                  having built and managed a thriving food business for over a decade. This
                  journey has taught me creativity, resilience, and the importance of combining
                  technical skills with business acumen.
                </p>
                <p>
                  I also bring creative flair through food photography and Photoshop, allowing
                  me to communicate complex ideas visually and tell compelling stories through
                  imagery.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">What Drives Me</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Bridging scientific research with data-driven decision making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Continuous learning and skill development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">▸</span>
                    <span>Creating value through the intersection of science, data, and business</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Running",
                    "Yoga",
                    "Reading & Audiobooks",
                    "Cooking",
                    "Coding",
                    "Hiking",
                    "Painting",
                  ].map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
