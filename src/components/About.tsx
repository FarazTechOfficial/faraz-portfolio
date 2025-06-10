
export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Brief Bio</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am Faraz Ahmed, a motivated Computer Science student at IQRA University 
                with a strong focus on backend development. I specialize in Java technologies 
                and love using technology to create efficient, user-friendly solutions. 
                I enjoy solving complex problems and continuously seek opportunities to grow 
                and apply my knowledge.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Soft Skills</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Strong communication and leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">IELTS certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Team player with continuous learning mindset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
