import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, Zap, Pill, TrendingUp, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const cases = [
    {
      title: "Healthcare IT Integration",
      description: "Enabled secure EMR access for 5,000+ patients",
      challenge: "Legacy system integration with modern EMR platform",
      solution: "Custom HL7/FHIR integration with HIPAA compliance",
      result: "100% uptime, 40% faster patient data retrieval",
      industry: "Healthcare",
      icon: Hospital,
      color: "text-red-600",
      bgGradient: "from-red-50 via-red-50/50 to-transparent",
      metrics: [
        { icon: Shield, value: "100%", label: "Uptime" },
        { icon: TrendingUp, value: "40%", label: "Faster Access" },
        { icon: Clock, value: "24/7", label: "Monitoring" }
      ]
    },
    {
      title: "Power Systems Upgrade", 
      description: "Delivered 20% energy efficiency improvement",
      challenge: "Outdated electrical infrastructure causing high operational costs",
      solution: "Smart grid implementation with automated monitoring",
      result: "20% energy savings, 50% reduction in maintenance costs",
      industry: "Industrial",
      icon: Zap,
      color: "text-blue-600",
      bgGradient: "from-blue-50 via-blue-50/50 to-transparent",
      metrics: [
        { icon: TrendingUp, value: "20%", label: "Energy Savings" },
        { icon: Shield, value: "50%", label: "Cost Reduction" },
        { icon: Clock, value: "Real-time", label: "Monitoring" }
      ]
    },
    {
      title: "Custom Pharmacy Management Tool",
      description: "Increased dispensing efficiency by 30%",
      challenge: "Manual processes causing delays and errors",
      solution: "AI-driven pharmacy management platform with real-time tracking",
      result: "30% faster dispensing, 95% error reduction",
      industry: "Pharma",
      icon: Pill,
      color: "text-emerald-600", 
      bgGradient: "from-emerald-50 via-emerald-50/50 to-transparent",
      metrics: [
        { icon: TrendingUp, value: "30%", label: "Faster" },
        { icon: Shield, value: "95%", label: "Error Reduction" },
        { icon: Clock, value: "Real-time", label: "Tracking" }
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real results that showcase our expertise and commitment to excellence across industries
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => {
            const IconComponent = caseStudy.icon;
            return (
              <div 
                key={index} 
                className="group animate-fade-in-up hover-lift"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  {/* Header with Gradient Background */}
                  <div className={`relative p-6 bg-gradient-to-br ${caseStudy.bgGradient} border-b border-border/20`}>
                    <div className="mb-4">
                      <span className={`text-sm font-semibold ${caseStudy.color} bg-white/80 px-3 py-1 rounded-full`}>
                        {caseStudy.industry}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-accent">
                      {caseStudy.description}
                    </CardDescription>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-2 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                    </div>
                    
                    <div className={`bg-gradient-to-r ${caseStudy.bgGradient} p-4 rounded-xl border border-border/20`}>
                      <h4 className={`text-sm font-bold ${caseStudy.color} mb-3 flex items-center`}>
                        <TrendingUp size={16} className="mr-2" />
                        Key Results
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {caseStudy.metrics.map((metric, idx) => {
                          const MetricIcon = metric.icon;
                          return (
                            <div key={idx} className="text-center">
                              <div className="inline-flex p-2 rounded-lg bg-white/50 mb-1">
                                <MetricIcon size={16} className={caseStudy.color} />
                              </div>
                              <div className="text-sm font-bold text-foreground">{metric.value}</div>
                              <div className="text-xs text-muted-foreground">{metric.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Testimonial */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl"></div>
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-10 border border-border/30 shadow-xl text-center">
            <div className="animate-fade-in-up">
              <div className="text-6xl text-primary/20 mb-4">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
                Blue Peak Technologies delivered exactly what they promised. Their technical expertise and attention to compliance requirements made our digital transformation seamless.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Hospital size={24} className="text-primary" />
                </div>
                <cite className="text-lg text-muted-foreground font-medium">
                  Healthcare IT Director, Regional Medical Center
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;