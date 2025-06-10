
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "faraztech10@gmail.com",
      href: "mailto:faraztech10@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 331 9042417",
      href: "tel:+923319042417"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Defence View Phase 2, Karachi, Pakistan",
      href: "#"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/faraz-ahmed-b58404271",
      href: "https://linkedin.com/in/faraz-ahmed-b58404271"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{contact.label}</h3>
                      {contact.href && contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Ready to work together? Let's build something amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
