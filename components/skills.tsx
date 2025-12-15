"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Microscope,
  Code2,
  Palette,
  TrendingUp,
  Database,
  Camera,
  BarChart3,
  Beaker,
} from "lucide-react";

const skillCategories = [
  {
    title: "Molecular Biology & Lab Techniques",
    icon: Microscope,
    color: "primary",
    skills: [
      "DNA/RNA Extraction",
      "qPCR & FISH Technique",
      "Nanopore Sequencing",
      "Gel Electrophoresis",
      "Protein & Lipid Extraction",
      "Microscopy & Dissection",
    ],
  },
  {
    title: "Bioinformatics & Data Analysis",
    icon: Database,
    color: "accent",
    skills: [
      "R Studio & Statistical Analysis",
      "Microbiome Analysis",
      "QIIME2 & Phyloseq",
      "16S rRNA Analysis",
      "BugBase & Cytospace",
      "Illumina Sequencing",
    ],
  },
  {
    title: "Data Analytics & Programming",
    icon: Code2,
    color: "secondary",
    skills: [
      "Python Programming",
      "Pandas & NumPy",
      "Data Visualization (Matplotlib, Seaborn, Plotly)",
      "Power BI Dashboards",
      "Time Series Forecasting",
      "SQL & Databases",
    ],
  },
  {
    title: "Research & Field Work",
    icon: Beaker,
    color: "primary",
    skills: [
      "Insect Rearing & Maintenance",
      "Plant Maintenance (Greenhouse)",
      "Field Collection & Storage",
      "Protocol Development",
      "Experimental Design",
      "Hi-throughput Bead Beating",
    ],
  },
  {
    title: "Business & Management",
    icon: TrendingUp,
    color: "accent",
    skills: [
      "Start-up Management",
      "Recruitment & Training",
      "Supply Chain Management",
      "Marketing & Social Media",
      "Product Development",
      "Process Optimization",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className={`h-6 w-6 text-${category.color}`} />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-2">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-center">
                  Additional Competencies
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Teaching & Mentoring",
                    "Project Management",
                    "Team Collaboration",
                    "Scientific Communication",
                    "Critical Thinking",
                    "Problem Solving",
                    "Multilingual (5 languages)",
                    "Attention to Detail",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-background rounded-full text-sm font-medium border hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
