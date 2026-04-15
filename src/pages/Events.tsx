import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import eventImage from "@/assets/event-space.jpg";
import eventsImage from "@/assets/events.jpg";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />



      {/* Hero Section */}
      <section className="relative min-h-[300px] flex items-center justify-center gradient-hero overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img src={eventsImage} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="mb-4">Upcoming events</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Join us to meet innovators, share ideas, and help make aging better for everyone
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-width">
          {/* Luma Calendar Embed - Upcoming Events */}
          <div className="w-full mb-8">
            <iframe
              src="https://lu.ma/embed/calendar/cal-FUnbXPr2shgbmu9/events?lt=light"
              width="100%"
              height="500"
              frameBorder="0"
              style={{
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="AgeTech SF Upcoming Events"
            ></iframe>
          </div>

          {/* Past Events Link */}
          <div className="text-center mb-12">
            <p className="text-muted-foreground">
              Check out our past events:{" "}
              <a
                href="https://luma.com/calendar/manage/cal-FUnbXPr2shgbmu9/events?period=past"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                View calendar
              </a>
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
            <h3 className="mb-4">Want to host or sponsor an event?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for partners who share our mission to improve aging through
              innovation and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Become a sponsor
              </Button>
              <Button variant="outline" size="lg">
                Volunteer with us
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
