const Industries = () => {
  const industries = [
    {
      title: "Healthcare & Pharma",
      description: "EMR integration, pharmacy IT solutions, and HIPAA-compliant systems",
      icon: "🏥",
      features: ["EMR/EHR Systems", "Pharmacy Management", "HIPAA Compliance", "Patient Data Security"]
    },
    {
      title: "Industrial & Power Systems",
      description: "Automation, SCADA systems, and electrical contracting services",
      icon: "⚙️",
      features: ["Industrial Automation", "SCADA Systems", "Power Distribution", "Process Control"]
    },
    {
      title: "Commercial & Government",
      description: "Infrastructure solutions and building management systems",
      icon: "🏢",
      features: ["Building Automation", "Infrastructure Design", "Energy Management", "Compliance Solutions"]
    },
    {
      title: "Technology & Startups",
      description: "Custom development and system integration for growing businesses",
      icon: "🚀",
      features: ["Custom Software", "API Integration", "Cloud Solutions", "Scalable Architecture"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise across diverse sectors with proven results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group p-8 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{industry.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;