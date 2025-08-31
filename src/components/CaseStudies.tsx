import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const cases = [
    {
      title: "Healthcare IT Integration",
      description: "Enabled secure EMR access for 5,000+ patients",
      challenge: "Legacy system integration with modern EMR platform",
      solution: "Custom HL7/FHIR integration with HIPAA compliance",
      result: "100% uptime, 40% faster patient data retrieval",
      industry: "Healthcare",
      icon: "🏥"
    },
    {
      title: "Power Systems Upgrade",
      description: "Delivered 20% energy efficiency improvement",
      challenge: "Outdated electrical infrastructure causing high operational costs",
      solution: "Smart grid implementation with automated monitoring",
      result: "20% energy savings, 50% reduction in maintenance costs",
      industry: "Industrial",
      icon: "⚡"
    },
    {
      title: "Custom Pharmacy Management Tool",
      description: "Increased dispensing efficiency by 30%",
      challenge: "Manual processes causing delays and errors",
      solution: "AI-driven pharmacy management platform with real-time tracking",
      result: "30% faster dispensing, 95% error reduction",
      industry: "Pharma",
      icon: "💊"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results that showcase our expertise and commitment to excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{caseStudy.icon}</span>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {caseStudy.industry}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {caseStudy.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                  <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-primary mb-1">Result</h4>
                  <p className="text-sm text-foreground font-medium">{caseStudy.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-medium text-foreground max-w-4xl mx-auto mb-6">
            "Blue Peak Technologies delivered exactly what they promised. Their technical expertise and attention to compliance requirements made our digital transformation seamless."
          </blockquote>
          <cite className="text-lg text-muted-foreground">— Healthcare IT Director, Regional Medical Center</cite>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;