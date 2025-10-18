import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import eventImage from "@/assets/event-space.jpg";

const Events = () => {
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
          <div className="mb-12 text-center">
            <h2 className="mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join us at one of our upcoming events to meet innovators, share ideas, and
              contribute to making aging better for everyone.
            </p>
          </div>

          {/* Luma Calendar Embed - Upcoming Events */}
          <div className="w-full mb-16">
            <iframe
              src="https://lu.ma/embed/calendar/cal-gzFpjdqyS3Zl58m/events?lt=light"
              width="100%"
              height="800"
              frameBorder="0"
              style={{
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="AgeTechSF Upcoming Events"
            ></iframe>
          </div>

          {/* Past Events Section */}
          <div className="mb-12">
            <div className="accent-bar mb-8"></div>
            <h2 className="mb-4 text-center">Past Events</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-8">
              Explore our previous gatherings and see the amazing community we've built together.
            </p>
          </div>

          {/* Luma Calendar Embed - Past Events */}
          <div className="w-full mb-12">
            <iframe
              src="https://lu.ma/embed/agetechsf?period=past"
              width="100%"
              height="600"
              frameBorder="0"
              style={{
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="AgeTechSF Past Events"
            ></iframe>
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
