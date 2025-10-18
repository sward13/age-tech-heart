import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import eventImage from "@/assets/event-space.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "AgeTech Innovation Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco Design Center",
      description:
        "Join us for our annual summit bringing together startups, researchers, and community leaders to explore the latest in age technology innovations.",
      attendees: "200+ expected",
    },
    {
      title: "Community Design Workshop",
      date: "April 8, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Berkeley Community Center",
      description:
        "A hands-on workshop where older adults and designers collaborate to prototype solutions for everyday challenges.",
      attendees: "50 spots available",
    },
    {
      title: "Tech & Coffee Meetup",
      date: "Monthly - First Tuesday",
      time: "10:00 AM - 12:00 PM",
      location: "Various Bay Area Locations",
      description:
        "Casual monthly gathering to discuss trends, share insights, and network with fellow AgeTech enthusiasts.",
      attendees: "Open to all",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-primary overflow-hidden mt-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src={eventImage}
            alt="Community event space"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="mb-4">Events & Workshops</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Connect, learn, and collaborate at our community gatherings
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="mb-12">
            <h2 className="mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Join us at one of our upcoming events to meet innovators, share ideas, and
              contribute to making aging better for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{event.date}</p>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p>{event.location}</p>
                  </div>

                  <p className="text-muted-foreground">{event.description}</p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}</span>
                  </div>

                  <Button variant="default" className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
            <h3 className="mb-4">Want to Host or Sponsor an Event?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for partners who share our mission to improve aging through
              innovation and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Become a Sponsor
              </Button>
              <Button variant="outline" size="lg">
                Volunteer with Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
