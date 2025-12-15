"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Microscope, TrendingUp, Code2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  icon: React.ElementType;
  color: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Owner and Co-founder",
    organization: "Indisk by ExpatMeal",
    period: "January 2024 - Present",
    description: "Started a street kitchen concept at Aarhus Street Food serving Indian food and managing a start-up at various levels.",
    achievements: [
      "Recruitment, salaries, and training management",
      "Food control and supply management",
      "Sales management and product development",
      "Marketing and social media management",
      "Process optimization for operational efficiency",
    ],
    icon: Briefcase,
    color: "secondary",
    link: "https://indiskaarhus.dk/home/",
  },
  {
    title: "Research Assistant",
    organization: "Aalborg University",
    period: "April 2022 - December 2023",
    description: "Worked extensively on 2 projects: Endosymbionts in Aphids collaboration with Melbourne university and Insect feed project (Musca domestica).",
    achievements: [
      "Maintenance and rearing aphids, endosymbionts, virus and plants, field collection and storage",
      "DNA extraction and Nanopore sequencing, screening of endosymbionts using qPCR and FISH technique",
      "Statistical analyses using R studio, ordering and purchase, brainstorming ideas for experiments",
      "Pilot studies to develop protocols for protein & lipid extraction and quantification",
      "Freeze drying larvae, hi-throughput bead beating, gel electrophoresis",
    ],
    icon: Microscope,
    color: "primary",
  },
  {
    title: "Owner and Co-founder",
    organization: "Indisk by ExpatMeal",
    period: "August 2016 - March 2022",
    description: "Founded and managed Indian food business, building brand presence and customer base.",
    achievements: [
      "Built and scaled successful food business from the ground up",
      "Managed all aspects of operations and customer relations",
      "Developed brand identity and marketing strategies",
      "Maintained consistent quality and customer satisfaction",
    ],
    icon: Briefcase,
    color: "secondary",
    link: "https://indiskaarhus.dk/home/",
  },
  {
    title: "Contributory Lecturer",
    organization: "R.T.M Nagpur University",
    period: "May 2009 - August 2011",
    description: "Teaching graduates and postgraduates in biochemistry and molecular biology, conducting lab practicals and preparing teaching materials.",
    achievements: [
      "Taught Nutritional biochemistry, biophysical chemistry, and molecular biology",
      "Conducted lab practicals: Biotechnology and recombinant DNA technology",
      "Prepared teaching materials and conducted exams",
      "Evaluation and assessment of student performance",
    ],
    icon: TrendingUp,
    color: "accent",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 hidden md:block z-10" />

                    <Card className="md:ml-20 hover:shadow-lg transition-all duration-300 border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-${exp.color}/10 flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className={`h-6 w-6 text-${exp.color}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                              <div>
                                <h3 className="text-xl font-bold">{exp.title}</h3>
                                <p className="text-muted-foreground">
                                  {exp.organization}
                                  {exp.link && (
                                    <>
                                      {" "}
                                      <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline text-sm"
                                      >
                                        [Visit Website]
                                      </a>
                                    </>
                                  )}
                                </p>
                              </div>
                              <Badge variant="outline" className="whitespace-nowrap">
                                {exp.period}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4">
                              {exp.description}
                            </p>
                            <div className="space-y-2">
                              <p className="text-sm font-semibold">Key Achievements:</p>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <li
                                    key={achIndex}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="text-primary mt-1">•</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
