
export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Technologies",
      skills: ["Java", "C", "SQL"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "Spring Core", "Spring JDBC", "JDBC", "JSP", "Servlets"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Multithreading", "Exception Handling"]
    },
    {
      title: "Backend Expertise",
      skills: ["RESTful API development", "Database integration"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary text-center">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-muted/50 hover:bg-muted transition-colors duration-200 px-3 py-2 rounded-lg text-center text-sm border border-border/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
