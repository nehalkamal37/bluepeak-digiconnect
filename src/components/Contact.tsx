import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Build Your Next Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Talk to an engineer today and discover how we can help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Book a Free Consultation</CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Interest *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">Consulting Services</SelectItem>
                    <SelectItem value="contracting">Contracting & Implementation</SelectItem>
                    <SelectItem value="systems">Systems Integration</SelectItem>
                    <SelectItem value="software">Custom Software Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>
                  Based in Memphis, Tennessee, serving clients nationwide
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Memphis, Tennessee</p>
                    <p className="text-sm text-muted-foreground">Serving nationwide & internationally</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">info@bluepeaktech.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">(901) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Talk to an engineer today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Call to Action Cards */}
            <div className="space-y-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">🚀</span>
                    <h3 className="text-lg font-semibold text-foreground">Ready to Start?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a consultation to discuss your project requirements and get a custom proposal.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">📋</span>
                    <h3 className="text-lg font-semibold text-foreground">Learn More</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download our solutions brochure to learn more about our capabilities and case studies.
                  </p>
                  <Button variant="outline" className="w-full">
                    Download Brochure
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;