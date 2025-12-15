"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    degree: "Master in Environmental Science",
    specialization: "Molecular Biology and Applied Genetics",
    institution: "University of South-eastern Norway",
    location: "Bø i Telemark",
    year: "2019 - 2021",
    icon: GraduationCap,
    color: "primary",
    highlights: "Thesis: Effects of fertilizer and glyphosate on soil microbial diversity and pathogens in two soil types in Telemark",
    thesisLink: "https://agris.fao.org/search/en/providers/125340/records/6749778e7625988a37220ad8",
  },
  {
    degree: "Master of Science",
    specialization: "Biochemistry",
    institution: "P.T.G.D Biochemistry",
    location: "Nagpur, India",
    year: "2007 - 2009",
    icon: GraduationCap,
    color: "primary",
    highlights: "Internship on Bt. Cotton at Central Institute of Cotton Research",
  },
  {
    degree: "Master in Management Science",
    specialization: "Human Resource Management",
    institution: "BVIMSR Mumbai University",
    location: "Mumbai, India",
    year: "2011 - 2013",
    icon: BookOpen,
    color: "accent",
  },
  {
    degree: "Data Analytics using Python",
    specialization: "Data Science & Analytics",
    institution: "Redi School of Digital Integration",
    location: "Denmark",
    year: "2025",
    icon: Award,
    color: "secondary",
    highlights: "Website Performance Analysis for Whiteaway",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-${edu.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`h-6 w-6 text-${edu.color}`} />
                    </div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-medium text-muted-foreground">
                      {edu.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.location}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {edu.year}
                    </p>
                    {edu.highlights && (
                      <p className="text-xs text-muted-foreground italic mt-2">
                        {edu.highlights}
                        {edu.thesisLink && (
                          <>
                            {" "}
                            <a
                              href={edu.thesisLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              [View Thesis]
                            </a>
                          </>
                        )}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
