import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Rocket, FileText, Clock, ArrowRight, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent),radial-gradient(circle_at_80%_50%,rgba(245,158,11,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Let's Build Your Next Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Talk to an engineer today and discover how we can help you achieve your goals.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <Send size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Book a Free Consultation</CardTitle>
                    <CardDescription className="text-base">
                      Tell us about your project and we'll get back to you within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Name *</Label>
                    <Input id="name" placeholder="Your full name" className="border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="border-border/50 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-semibold">Company</Label>
                  <Input id="company" placeholder="Your company name" className="border-border/50 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project-type" className="text-sm font-semibold">Project Interest *</Label>
                  <Select>
                    <SelectTrigger className="border-border/50 focus:border-primary">
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
                  <Label htmlFor="message" className="text-sm font-semibold">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    className="min-h-[120px] border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button className="w-full group hover:bg-primary/90 transition-all duration-300" size="lg">
                  Send Message
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>Typical response time: 2-4 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <MapPin size={24} className="text-primary" />
                  <span>Get in Touch</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Based in Memphis, Tennessee, serving clients nationwide and internationally
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all group">
                  <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Memphis, Tennessee</p>
                    <p className="text-sm text-muted-foreground">Serving nationwide & internationally</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/15 transition-all group">
                  <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">info@bluepeaktech.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/5 to-emerald-600/10 hover:from-emerald-500/10 hover:to-emerald-600/15 transition-all group">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                    <Phone size={20} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">(901) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Talk to an engineer today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Enhanced CTA Cards */}
            <div className="grid gap-6">
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                        <Rocket size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Ready to Start?</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Schedule a consultation to discuss your project requirements and get a custom proposal tailored to your needs.
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      Schedule Consultation
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-br from-accent/10 to-accent/5 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors">
                        <FileText size={24} className="text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Learn More</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Download our comprehensive solutions brochure to learn more about our capabilities, case studies, and success stories.
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                      Download Brochure
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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