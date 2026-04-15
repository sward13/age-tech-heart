import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Lightbulb, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-community.jpg";
import involvedImage from "@/assets/involved.jpg";
const Home = () => {
  return <div className="min-h-screen">
    <Navigation />

    {/* Hero Section */}
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center gradient-hero overflow-hidden mt-16">
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Diverse intergenerational community collaborating with technology" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <h1 className="mb-6 animate-fade-in leading-tight">
          Creating a world where everyone ages with dignity, possibility, and purpose.
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button variant="hero" size="lg" asChild>
            <a href="https://forms.gle/oahTbtZFRDx2QAAh9" target="_blank" rel="noopener noreferrer">Join our community</a>
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300" asChild>
            <Link to="/events">Upcoming events</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* What We Do Section */}
    <section className="section-padding gradient-subtle">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We connect startups, researchers, caregivers, and community leaders to build
            technology solutions that truly serve older adults.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">Center learning in real needs</h3>
              <p className="text-muted-foreground">
                We identify the most pressing challenges in aging, curating research, mapping opportunities, and focusing our community's energy where it can make the greatest difference.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="mb-2">Cultivate a diverse ecosystem</h3>
              <p className="text-muted-foreground">
                We break down silos by bringing together founders, funders, older adults and those who support them, so diverse perspectives converge into meaningful solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-soft transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="mb-2">Catalyze action</h3>
              <p className="text-muted-foreground">
                We turn shared understanding into tangible progress, through pilots, rapid validation, and hands-on projects that move aging forward.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Mission Statement */}
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-muted-foreground mb-8">
            We unite builders, funders, and the communities we serve, turning ideas into action that redefines aging.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Community</span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full">
              Human Tech
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full">
              Positive Aging
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Innovation</span>
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full">
              Inclusion
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full">Connection</span>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative section-padding overflow-hidden gradient-hero">
      <div className="absolute inset-0">
        <img src={involvedImage} alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative z-10 container-width text-center text-white">
        <h2 className="mb-4">Ready to get involved?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
          Join our growing community of innovators, researchers, and advocates making aging
          better for everyone.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="https://forms.gle/oahTbtZFRDx2QAAh9" target="_blank" rel="noopener noreferrer">Join AgeTech SF today</a>
        </Button>
      </div>
    </section>

    <Footer />
  </div>;
};
export default Home;