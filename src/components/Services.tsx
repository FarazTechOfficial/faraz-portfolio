
import { Code, Database, Server, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Backend Development",
      description: "Custom backend solutions using Java and Spring Boot"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "REST API Development",
      description: "Secure, scalable APIs for any system"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Integration",
      description: "Efficient data storage and management solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Optimizing applications for better performance and scalability"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Services I Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border border-border/50">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
