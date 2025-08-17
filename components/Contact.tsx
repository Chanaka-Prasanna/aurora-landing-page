"use client";

import Section from "./Section";
import NeonButton from "./NeonButton";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-heading text-white mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-textMuted mb-6">
              Ready to bring your vision to life with Aurora's design system?
              Reach out to us and let's discuss how we can help transform your
              ideas into stunning, accessible interfaces.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-auroraCyan/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-auroraCyan" />
              </div>
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-textMuted">hello@aurora-design.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-auroraMint/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-auroraMint" />
              </div>
              <div>
                <div className="text-white font-medium">Phone</div>
                <div className="text-textMuted">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-auroraViolet/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-auroraViolet" />
              </div>
              <div>
                <div className="text-white font-medium">Location</div>
                <div className="text-textMuted">San Francisco, CA</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-auroraCyan/20 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-auroraCyan/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-auroraCyan/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-xl font-heading text-white mb-6">
            Send us a message
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full glass rounded-lg px-4 py-3 text-white placeholder-textMuted bg-transparent border border-white/20 focus:border-auroraCyan focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full glass rounded-lg px-4 py-3 text-white placeholder-textMuted bg-transparent border border-white/20 focus:border-auroraCyan focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-white font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-textMuted bg-transparent border border-white/20 focus:border-auroraCyan focus:outline-none transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-textMuted bg-transparent border border-white/20 focus:border-auroraCyan focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <NeonButton type="submit" className="w-full">
              Send Message
            </NeonButton>
          </form>
        </div>
      </div>
    </Section>
  );
}
