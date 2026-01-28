// shadcn-ui components
import { Card } from "../ui/card";

// icons
import { Github, CirclePlay } from "lucide-react";

// projects data
import projects from "../../data/projects.json";

export default function ProjectsSection() {
  const projectsData: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectDemo: string;
    projectRepo: string;
  }[] = projects;
  
  return (
    <section
      id="projectsSection"
      className="min-h-screen m-6 xs:m-14 md:m-20 lg:m-28"
    >
      <h2 className="text-foreground text-4xl text-center md:text-left font-semibold mb-10">
        My Projects
      </h2>
      {/* projects container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Card key={index}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-72 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2 capitalize">
                {project.title}
              </h3>
              <p className="text-base text-muted-foreground mb-4">{project.description}</p>
              <div className="flex space-x-5">
                <a
                  href={project.projectDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium transition-transform underline hover:scale-110 flex items-center gap-1"
                >
                  <CirclePlay className="w-6 h-6" />
                  Live Demo
                </a>
                <a
                  href={project.projectRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium transition-transform underline hover:scale-110 flex items-center gap-1"
                >
                  <Github className="w-6 h-6" />
                  Repo
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
