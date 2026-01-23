// shadcn-ui components
import { Card } from "../ui/card";

export default function ProjectsSection() {
  const projectsDetails: {
    title: string;
    description: string;
    imageUrl: string;
    projectDemo: string;
    projectRepo: string;
  }[] = [
    {
      title: "Project Title 1",
      description: "Brief description of the project.",
      imageUrl: "URL to project image",
      projectDemo: "URL to live project",
      projectRepo: "URL to project repository",
    },
    {
      title: "Project Title 2",
      description: "Brief description of the project.",
      imageUrl: "URL to project image",
      projectDemo: "URL to live project",
      projectRepo: "URL to project repository",
    },
    {
      title: "Project Title 3",
      description: "Brief description of the project.",
      imageUrl: "URL to project image",
      projectDemo: "URL to live project",
      projectRepo: "URL to project repository",
    },
    {
      title: "Project Title 4",
      description: "Brief description of the project.",
      imageUrl: "URL to project image",
      projectDemo: "URL to live project",
      projectRepo: "URL to project repository",
    },
  ];

  return (
    <section
      id="projectsSection"
      className="min-h-screen m-6 xs:m-14 md:m-20 lg:m-28"
    >
      <h2 className="text-foreground text-4xl font-semibold mb-10">
        My Projects
      </h2>
      {/* projects container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsDetails.map((project, index) => (
          <Card key={index}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-base mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.projectDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.projectRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
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
