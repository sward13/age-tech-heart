import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">AgeTechSF</h3>
            <p className="text-muted-foreground">
              A Bay Area community improving lives through technology, design, and collaboration.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/impact" className="text-muted-foreground hover:text-primary transition-colors">
                Impact
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-muted-foreground mb-2">
              Join our community of innovators making aging better for everyone.
            </p>
            <Link
              to="/contact"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} AgeTechSF. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
