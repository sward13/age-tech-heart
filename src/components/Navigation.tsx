import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/agetech-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-6 py-[24px]">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="AgeTech SF" className="h-24" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/events" className="text-foreground hover:text-primary transition-colors">
              Events
            </Link>
            <Link to="/impact" className="text-foreground hover:text-primary transition-colors">
              Impact
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden border-t border-border bg-background">
            <div className="flex flex-col gap-4 p-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/events" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/impact" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
                Impact
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button variant="default" size="sm" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;