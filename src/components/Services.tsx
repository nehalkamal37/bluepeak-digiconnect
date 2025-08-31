import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Settings, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Consulting",
      description: "Strategic guidance for your digital transformation journey",
      details: [
        "Feasibility studies & ROI analysis",
        "Digital/engineering audits",
        "Strategic planning for modernization",
        "Compliance consulting"
      ],
      icon: Target,
      gradient: "consulting-gradient",
      color: "text-blue-600"
    },
    {
      title: "Contracting & Implementation",
      description: "End-to-end project delivery from design to commissioning",
      details: [
        "Electrical & automation contracting",
        "MV/LV systems & BMS",
        "HVAC power & relay protection",
        "Turnkey project delivery"
      ],
      icon: Zap,
      gradient: "contracting-gradient",
      color: "text-amber-600"
    },
    {
      title: "Systems Integration",
      description: "Seamless integration of industrial and enterprise systems",
      details: [
        "Industrial automation (PLC, SCADA, ATS)",
        "EMR/ERP integrations (HL7, FHIR)",
        "HIPAA compliance solutions",
        "Smart systems deployment"
      ],
      icon: Settings,
      gradient: "systems-gradient",
      color: "text-emerald-600"
    },
    {
      title: "Software Solutions",
      description: "Custom applications tailored to your business needs",
      details: [
        "Custom web & mobile applications",
        "Pharmacy & healthcare platforms",
        "AI-driven tools",
        "Cloud-enabled solutions"
      ],
      icon: Code2,
      gradient: "software-gradient",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions across engineering, technology, and digital transformation
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group relative animate-fade-in-up hover-lift"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-br ${service.gradient === 'consulting-gradient' ? 'from-blue-500 to-blue-600' : 
                      service.gradient === 'contracting-gradient' ? 'from-amber-500 to-amber-600' :
                      service.gradient === 'systems-gradient' ? 'from-emerald-500 to-emerald-600' :
                      'from-purple-500 to-purple-600'} rounded-full blur-2xl`}></div>
                  </div>
                  
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-2xl ${service.color} bg-gradient-to-br ${
                        service.gradient === 'consulting-gradient' ? 'from-blue-50 to-blue-100' : 
                        service.gradient === 'contracting-gradient' ? 'from-amber-50 to-amber-100' :
                        service.gradient === 'systems-gradient' ? 'from-emerald-50 to-emerald-100' :
                        'from-purple-50 to-purple-100'
                      } group-hover-scale transition-all duration-300`}>
                        <IconComponent size={32} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-muted-foreground">
                          <ArrowRight size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;