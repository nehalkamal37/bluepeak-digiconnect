import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Lightbulb, Shield, CheckCircle2, Globe, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "Transparent communication and ethical business practices",
      icon: Handshake,
      color: "text-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      title: "Innovation", 
      description: "Cutting-edge solutions that drive your business forward",
      icon: Lightbulb,
      color: "text-amber-600",
      bgGradient: "from-amber-500/10 to-amber-600/10"
    },
    {
      title: "Reliability",
      description: "Consistent delivery and dependable support you can trust",
      icon: Shield,
      color: "text-emerald-600",
      bgGradient: "from-emerald-500/10 to-emerald-600/10"
    },
    {
      title: "Compliance",
      description: "Meeting all regulatory standards and industry requirements",
      icon: CheckCircle2,
      color: "text-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/10"
    }
  ];

  const benefits = [
    "End-to-End Delivery – from strategy → build → support",
    "Cross-Border Expertise – U.S. & international project delivery",
    "Compliance-Ready – HIPAA, NEC, NFPA, ISO standards",
    "Proven Impact – projects that reduce costs, boost efficiency, and improve reliability"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent),radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
              About Blue Peak Technologies
            </h2>
            <div className="relative p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-card/80 to-accent/10 backdrop-blur-sm border border-border/30 shadow-xl">
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                Blue Peak Technologies is a Memphis-based cross-disciplinary team of engineers, consultants, and developers.
              </p>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <p className="text-lg md:text-xl font-semibold leading-relaxed">
                  Our mission: To bridge the gap between engineering systems and technology innovation, providing reliable and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-lg text-muted-foreground">The principles that guide every project and partnership</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="group animate-fade-in-up hover-lift"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <Card className="text-center border-0 bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.bgGradient} mb-6 group-hover-scale transition-all duration-300`}>
                        <IconComponent size={32} className={value.color} />
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Why Choose Us - Enhanced Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl"></div>
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-10 border border-border/30 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h3>
              <p className="text-lg text-muted-foreground">What sets us apart in the industry</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-slide-in group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300"
                  style={{animationDelay: `${index * 0.1 + 0.5}s`}}
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 size={20} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{benefit}</p>
                </div>
              ))}
            </div>
            
            {/* Additional Stats */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: Globe, number: "3+", label: "Countries Served" },
                  { icon: Award, number: "100%", label: "Compliance Rate" },
                  { icon: Users, number: "25+", label: "Team Members" },
                  { icon: TrendingUp, number: "95%", label: "Client Retention" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 1}s`}}>
                      <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;