import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Lightbulb, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-community.jpg";
const Home = () => {
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center gradient-hero overflow-hidden mt-16">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Diverse intergenerational community collaborating with technology" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <h1 className="mb-6 animate-fade-in">
            Making Aging Better for Everyone
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in opacity-95">A Bay Area community of innovators improving the lives of older adults and caregivers through technology, design, and collaboration.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" asChild>
              <a href="https://forms.gle/oahTbtZFRDx2QAAh9" target="_blank" rel="noopener noreferrer">Join Our Community</a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <Link to="/events">Upcoming Events</Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-soft transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Community Building</h3>
                <p className="text-muted-foreground">
                  Foster connections between innovators, caregivers, and older adults to share
                  insights and collaborate.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="mb-2">Events & Workshops</h3>
                <p className="text-muted-foreground">
                  Regular meetups, innovation summits, and workshops to explore emerging age tech
                  trends and solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="mb-2">Innovation Labs</h3>
                <p className="text-muted-foreground">
                  Collaborative spaces to prototype, test, and refine technology solutions with
                  real user feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Impact Stories</h3>
                <p className="text-muted-foreground">
                  Share success stories and learnings from projects that have made a real
                  difference in people's lives.
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
              We believe aging is a natural part of life that should be celebrated, not feared.
              By bringing together diverse perspectives and cutting-edge technology, we're creating
              solutions that empower older adults to live with dignity, independence, and joy.
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
      <section className="section-padding gradient-hero">
        <div className="container-width text-center text-white">
          <h2 className="mb-4">Ready to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join our growing community of innovators, researchers, and advocates making aging
            better for everyone.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://forms.gle/oahTbtZFRDx2QAAh9" target="_blank" rel="noopener noreferrer">Join AgeTech SF Today</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;