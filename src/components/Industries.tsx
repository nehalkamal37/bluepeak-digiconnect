import { Heart, Cog, Building2, Rocket, ArrowRight, CheckCircle } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare & Pharma",
      description: "EMR integration, pharmacy IT solutions, and HIPAA-compliant systems",
      icon: Heart,
      color: "text-red-600",
      bgColor: "from-red-50 to-pink-50",
      accentColor: "border-red-200",
      features: ["EMR/EHR Systems", "Pharmacy Management", "HIPAA Compliance", "Patient Data Security"]
    },
    {
      title: "Industrial & Power Systems", 
      description: "Automation, SCADA systems, and electrical contracting services",
      icon: Cog,
      color: "text-blue-600",
      bgColor: "from-blue-50 to-indigo-50",
      accentColor: "border-blue-200",
      features: ["Industrial Automation", "SCADA Systems", "Power Distribution", "Process Control"]
    },
    {
      title: "Commercial & Government",
      description: "Infrastructure solutions and building management systems",
      icon: Building2,
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-green-50",
      accentColor: "border-emerald-200",
      features: ["Building Automation", "Infrastructure Design", "Energy Management", "Compliance Solutions"]
    },
    {
      title: "Technology & Startups",
      description: "Custom development and system integration for growing businesses",
      icon: Rocket,
      color: "text-purple-600",
      bgColor: "from-purple-50 to-violet-50",
      accentColor: "border-purple-200",
      features: ["Custom Software", "API Integration", "Cloud Solutions", "Scalable Architecture"]
    }
  ];

  return (
    <section id="industries" className="py-24 relative bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Specialized expertise across diverse sectors with proven results and deep industry knowledge
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={index} 
                className="group animate-slide-in hover-lift"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className={`relative p-8 rounded-3xl border-2 ${industry.accentColor} bg-gradient-to-br ${industry.bgColor} hover:shadow-xl transition-all duration-500 overflow-hidden`}>
                  
                  <div className="relative z-10">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industry.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-sm">
                            <CheckCircle size={16} className={`${industry.color} flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <button className={`inline-flex items-center space-x-2 ${industry.color} hover:opacity-80 font-medium transition-all`}>
                          <span>View Case Studies</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "15+", label: "Industries Served" },  
            { number: "99.9%", label: "Uptime Achieved" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 1}s`}}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;