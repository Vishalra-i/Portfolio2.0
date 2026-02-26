import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding border-t border-slate-800/80">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s Build Your Next Website</h2>
          <p className="text-slate-300">
            Tell me about your business and I&apos;ll suggest the best package for maximum lead generation.
          </p>
          <Link
            href="https://wa.me/919876543210?text=Hi%20Vishal%2C%20I%20want%20a%20website%20demo"
            target="_blank"
            className={buttonVariants({ size: "lg" })}
          >
            Chat on WhatsApp
          </Link>
        </div>

        <form className="glass-card rounded-2xl p-6">
          {/* Static form UI can be connected to Formspree/SMTP/API later. */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="you@business.com" required />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <Textarea id="message" name="message" placeholder="Tell me about your business goals..." required />
            </div>
            <Button type="submit" className="w-full">
              Send Inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
