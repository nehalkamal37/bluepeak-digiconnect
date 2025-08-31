import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "Transparent communication and ethical business practices",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that drive your business forward",
      icon: "💡"
    },
    {
      title: "Reliability",
      description: "Consistent delivery and dependable support you can trust",
      icon: "🛡️"
    },
    {
      title: "Compliance",
      description: "Meeting all regulatory standards and industry requirements",
      icon: "✅"
    }
  ];

  const benefits = [
    "End-to-End Delivery – from strategy → build → support",
    "Cross-Border Expertise – U.S. & international project delivery",
    "Compliance-Ready – HIPAA, NEC, NFPA, ISO standards",
    "Proven Impact – projects that reduce costs, boost efficiency, and improve reliability"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Blue Peak Technologies
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Blue Peak Technologies is a Memphis-based cross-disciplinary team of engineers, consultants, and developers.
          </p>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Our mission:</strong> To bridge the gap between engineering systems and technology innovation, providing reliable and scalable solutions.
          </p>
        </div>
        
        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="bg-card rounded-lg p-8 border border-border/50">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;