// shadcn-ui components
import { Card } from "../ui/card";

// icons
import { Mail, Phone, User } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contactSection"
      className="min-h-screen m-6 xs:m-14 md:m-20 lg:m-28"
    >
      <h2 className="text-foreground text-4xl text-center md:text-left font-semibold mb-10">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-4" action={"https://formsubmit.co/alihossam916@gmail.com"} method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </Card>

        {/* Contact Info */}
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="text-lg font-medium">Ali Hossam</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="text-lg font-medium">+20 01202775920</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-medium">alihossam916@gmail.com</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
