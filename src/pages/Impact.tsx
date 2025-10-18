import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import impactImage from "@/assets/impact-story-1.jpg";

const Impact = () => {
  const stories = [
    {
      title: "Empowering Digital Literacy",
      description:
        "Through our weekly tech workshops, over 500 older adults have gained confidence using smartphones, tablets, and essential apps for staying connected with family.",
      image: impactImage,
      quote: "I never thought I'd be video calling my grandkids across the country. Now it's part of my daily routine.",
      author: "Margaret, 72",
    },
    {
      title: "Health Monitoring Innovation",
      description:
        "Collaborated with a local startup to pilot user-friendly health monitoring devices, leading to early detection of health issues for 50+ community members.",
      stats: "93% user satisfaction",
      quote: "The device is so simple to use, and it gives me peace of mind knowing my vitals are being tracked.",
      author: "Robert, 68",
    },
    {
      title: "Community Connection Platform",
      description:
        "Launched a neighborhood social platform connecting isolated seniors with local volunteers for errands, companionship, and tech support.",
      stats: "200+ connections made",
      quote: "Having someone to call when I need help has been life-changing. I feel less alone.",
      author: "Dorothy, 81",
    },
  ];

  const metrics = [
    { number: "1,500+", label: "Community Members" },
    { number: "50+", label: "Innovation Projects" },
    { number: "200+", label: "Events Hosted" },
    { number: "25+", label: "Partner Organizations" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-secondary overflow-hidden mt-16">
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="mb-4">Our Impact</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Real stories of how technology and community are transforming lives
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.number}
                </p>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Impact Stories */}
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-card"
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h2 className="mb-4">{story.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{story.description}</p>

                  {story.stats && (
                    <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold mb-6">
                      {story.stats}
                    </div>
                  )}

                  <Card className="bg-muted border-l-4 border-l-primary shadow-none">
                    <CardContent className="pt-6">
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <p className="text-lg italic mb-4">{story.quote}</p>
                      <p className="text-sm font-medium text-muted-foreground">— {story.author}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-muted">
        <div className="container-width text-center">
          <h2 className="mb-4">Be Part of the Change</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every innovation starts with a conversation. Join us and help create solutions that
            truly matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground h-11 px-8 shadow-soft hover:bg-primary/90 transition-colors"
            >
              Get Involved
            </a>
            <a
              href="/events"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 transition-colors"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
