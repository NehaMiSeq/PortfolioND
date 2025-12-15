"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, Image as ImageIcon } from "lucide-react";

type ProjectCategory = "all" | "research" | "data" | "creative";

interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  link?: string;
  github?: string;
  type: "research" | "data" | "creative";
}

const projects: Project[] = [
  // Research Publications
  {
    title: "Deleterious effects of the endosymbiont Rickettsiella viridis in Myzus persicae",
    description: "Published research investigating the environmentally dependent deleterious effects of the endosymbiont Rickettsiella viridis in Myzus persicae (green peach aphid). Open access publication in the Journal of Pest Science (2025), Volume 98, pages 375–388.",
    category: "research",
    tags: ["Biochemistry", "Endosymbiont", "Pest Science", "Research"],
    link: "https://link.springer.com/article/10.1007/s10340-024-01786-x",
    type: "research",
  },
  {
    title: "Effects of fertilizer and glyphosate on soil microbial diversity",
    description: "Master's thesis investigating the effects of fertilizer and glyphosate on soil microbial diversity and pathogens in two soil types in Telemark. Research conducted at University of South-eastern Norway.",
    category: "research",
    tags: ["Soil Microbiology", "Environmental Science", "Bioinformatics", "R Studio"],
    link: "https://agris.fao.org/search/en/providers/125340/records/6749778e7625988a37220ad8",
    type: "research",
  },
  // Data Analytics Projects
  {
    title: "Website Performance Analysis for Whiteaway",
    description: "Comprehensive data analytics project analyzing website performance, items/product level analysis, and holiday trends. Utilized Python programming for data manipulation, visualization, and insights generation using Pandas, NumPy, Matplotlib, Seaborn, and Plotly.",
    category: "data",
    tags: ["Python", "Pandas", "Data Visualization", "Power BI", "Performance Analysis"],
    github: "https://github.com/NehaMiSeq",
    type: "data",
  },
  // Creative Work
  {
    title: "Food Photography - Indisk by ExpatMeal",
    description: "Professional food photography showcasing authentic Indian cuisine from Indisk by ExpatMeal. High-quality images capturing texture, color, and presentation of dishes like Paneer Tikka Masala.",
    category: "creative",
    tags: ["Photography", "Food Styling", "Visual Arts", "Photoshop"],
    type: "creative",
  },
  {
    title: "Marketing & Brand Design",
    description: "Creative presentations and visual designs for Indisk by ExpatMeal using Adobe Photoshop, including social media content, promotional materials, and brand identity development.",
    category: "creative",
    tags: ["Photoshop", "Design", "Branding", "Social Media"],
    type: "creative",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects", count: projects.length },
    { id: "research" as ProjectCategory, label: "Research & Publications", count: projects.filter(p => p.category === "research").length },
    { id: "data" as ProjectCategory, label: "Data Analytics", count: projects.filter(p => p.category === "data").length },
    { id: "creative" as ProjectCategory, label: "Creative Work", count: projects.filter(p => p.category === "creative").length },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Projects & Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-12 rounded-full" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg leading-tight">
                      {project.title}
                    </CardTitle>
                    {project.type === "research" && (
                      <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                    {project.type === "data" && (
                      <Github className="h-5 w-5 text-accent flex-shrink-0" />
                    )}
                    {project.type === "creative" && (
                      <ImageIcon className="h-5 w-5 text-secondary flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 flex-1"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3" />
                        View
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 flex-1"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-3 w-3" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
