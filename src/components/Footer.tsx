const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BP</span>
              </div>
              <span className="text-xl font-bold">Blue Peak Technologies</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Engineering, Technology & Digital Transformation solutions from Memphis, Tennessee.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              © 2024 Blue Peak Technologies. All rights reserved.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contracting</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Systems Integration</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Software Solutions</a></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Industrial</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Technology</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Memphis, Tennessee</li>
              <li>info@bluepeaktech.com</li>
              <li>(901) 555-0123</li>
            </ul>
            <div className="mt-4">
              <h5 className="font-medium mb-2 text-sm">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-xs">
            HIPAA • NEC • NFPA • ISO Compliant | U.S. & International Project Delivery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;