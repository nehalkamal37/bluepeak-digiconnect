import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      icon: "🎯"
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
      icon: "⚡"
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
      icon: "🔧"
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
      icon: "💻"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions across engineering, technology, and digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;