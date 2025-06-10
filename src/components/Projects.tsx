
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "Sales Treasure",
      description: "A distribution-focused solution with role-based access, secure auth, real-time inventory tracking, and license management.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL"]
    },
    {
      title: "ATM Application",
      description: "A secure banking service portal for students and staff at Iqra University.",
      technologies: ["Java", "JDBC", "Swing", "MySQL"]
    },
    {
      title: "Library Management System",
      description: "Complete backend system for managing library operations.",
      technologies: ["Java", "Spring Boot", "REST API", "PostgreSQL"]
    },
    {
      title: "File Transfer App",
      description: "Built with Java GUI and multithreading for seamless peer-to-peer file transfers.",
      technologies: ["Java", "Multithreading", "Socket Programming", "Swing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
