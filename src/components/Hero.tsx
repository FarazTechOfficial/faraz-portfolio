
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Server } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.primary/10),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.secondary/10),transparent_50%)]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-100">
          <Code className="w-6 h-6 text-primary/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-300">
          <Database className="w-8 h-8 text-secondary/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-bounce delay-500">
          <Server className="w-5 h-5 text-primary/40" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Faraz
                </span>
                <br />
                <span className="text-foreground">Ahmed</span>
              </h1>
              
              <div className="relative">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                  Java Backend Developer
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Building <span className="text-primary font-semibold">efficient</span> and{" "}
              <span className="text-primary font-semibold">scalable</span> backend systems 
              with Java & Spring Boot ecosystem.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300">
                <a href="#contact" className="flex items-center gap-2">
                  <Download className="w-4 h-4 group-hover:bounce transition-transform" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 border-4 border-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <div className="text-center space-y-4">
                    <div className="text-8xl mb-4 animate-bounce">👨‍💻</div>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">Faraz Ahmed</p>
                      <p className="text-sm text-muted-foreground">Backend Specialist</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Tech Icons around profile */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-100">
                  <span className="text-lg font-bold text-primary">J</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-300">
                  <span className="text-sm font-bold text-secondary">S</span>
                </div>
                <div className="absolute top-1/4 -left-6 w-8 h-8 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce delay-500">
                  <span className="text-xs font-bold text-accent-foreground">API</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
