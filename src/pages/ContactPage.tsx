import { useState } from "react";
import { Mail, Send, MapPin, Calendar, Github, Linkedin, Twitter, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ResumeDownload } from "@/components/ResumeDownload";
import { useToast } from "@/hooks/use-toast";

export function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = `Hi Deekshith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoUrl =
      `mailto:bdeekshith41@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const link = document.createElement("a");
    link.href = mailtoUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Email client opened!",
      description: "Your message is pre-filled — just hit Send in your email app.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bdeekshith41@gmail.com",
      href: "mailto:bdeekshith41@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karnataka, India",
      description: "Available for remote work"
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "IST (UTC +5:30)",
      description: "Usually respond within 24 hours"
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Open to opportunities",
      description: "Ready to start immediately"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@deekshith-b48",
      href: "https://github.com/deekshith-b48",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "deekshithb48",
      href: "https://linkedin.com/in/deekshithb48",
      description: "Professional network"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@deekshith_b48",
      href: "https://x.com/deekshith_b48",
      description: "Latest updates"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-10 md:space-y-14">

        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-doto text-[10px] font-medium text-muted-foreground/60 tracking-[0.3em] uppercase">01 —</span>
            <span className="section-badge">
              <MessageCircle className="w-3 h-3" />
              Let's Connect
            </span>
          </div>
          <h1 className="font-bitcount page-heading">Get In Touch</h1>
          <p className="font-space text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Open to full-time roles, freelance projects, and collaboration. Let's build something great.
          </p>
        </div>

        {/* Resume strip — above the form columns */}
        <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm px-5 py-4">
          <ResumeDownload />
        </div>

        {/* Two-column content */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">

          {/* LEFT — Contact info + social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-3">
              <h2 className="font-bitcount font-bold text-base text-foreground">Contact Information</h2>
              <div className="grid gap-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 hover:border-accent/20 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        {/* Accent icon box */}
                        <div
                          className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(135deg, hsl(258 90% 78% / 0.2), hsl(200 90% 68% / 0.12))",
                            border: "1px solid hsl(258 90% 78% / 0.18)"
                          }}
                        >
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bitcount font-bold text-xs text-foreground mb-0.5">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="font-space text-xs text-accent hover:text-accent/80 transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-space text-xs text-muted-foreground">{info.value}</p>
                          )}
                          <p className="font-space text-[10px] text-muted-foreground/60 mt-0.5">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h2 className="font-bitcount font-bold text-base text-foreground">Social Media</h2>
              <div className="grid gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-4 hover:border-accent/20 transition-all duration-300 group flex items-start gap-3 cursor-pointer"
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                        style={{
                          background: "linear-gradient(135deg, hsl(258 90% 78% / 0.2), hsl(200 90% 68% / 0.12))",
                          border: "1px solid hsl(258 90% 78% / 0.18)"
                        }}
                      >
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bitcount font-bold text-xs text-foreground mb-0.5 group-hover:text-accent transition-colors duration-200">{social.label}</p>
                        <p className="font-space text-xs text-muted-foreground">{social.value}</p>
                        <p className="font-space text-[10px] text-muted-foreground/60 mt-0.5">{social.description}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors duration-200 mt-0.5 flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 md:p-6">
            <h2 className="font-bitcount font-bold text-base text-foreground mb-5">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-space text-xs font-medium text-muted-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="font-space text-xs bg-background/50 border-white/[0.08] placeholder:text-muted-foreground/40 focus:border-accent/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-space text-xs font-medium text-muted-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="font-space text-xs bg-background/50 border-white/[0.08] placeholder:text-muted-foreground/40 focus:border-accent/40"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject" className="font-space text-xs font-medium text-muted-foreground">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="font-space text-xs bg-background/50 border-white/[0.08] placeholder:text-muted-foreground/40 focus:border-accent/40"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="font-space text-xs font-medium text-muted-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, opportunity, or any questions you have..."
                  required
                  rows={6}
                  className="font-space text-xs bg-background/50 border-white/[0.08] placeholder:text-muted-foreground/40 focus:border-accent/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-space text-xs bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-5 p-3.5 rounded-xl bg-accent/[0.06] border border-accent/15">
              <p className="font-space text-xs text-muted-foreground leading-relaxed">
                <span className="font-bitcount font-semibold text-accent">How it works —</span>{" "}
                Hitting Send opens your email client with everything pre-filled. Just click Send once more to deliver your message.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Mail,
              title: "Direct Email",
              desc: "Quick response guaranteed",
              cta: "Send Email",
              href: "mailto:bdeekshith41@gmail.com",
              external: false,
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              desc: "Professional networking",
              cta: "Connect",
              href: "https://linkedin.com/in/deekshithb48",
              external: true,
            },
            {
              icon: Github,
              title: "GitHub",
              desc: "Check out my code",
              cta: "Follow",
              href: "https://github.com/deekshith-b48",
              external: true,
            },
            {
              icon: Calendar,
              title: "Schedule Call",
              desc: "Available for meetings",
              cta: "Schedule",
              href: "mailto:bdeekshith41@gmail.com?subject=Schedule%20a%20Call",
              external: false,
            },
          ].map(({ icon: Icon, title, desc, cta, href, external }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/[0.07] bg-card/50 backdrop-blur-sm p-5 hover:border-accent/20 transition-all duration-300 group text-center flex flex-col items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200"
                style={{
                  background: "linear-gradient(135deg, hsl(258 90% 78% / 0.2), hsl(200 90% 68% / 0.12))",
                  border: "1px solid hsl(258 90% 78% / 0.18)"
                }}
              >
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="font-bitcount font-bold text-sm text-foreground mb-0.5">{title}</p>
                <p className="font-space text-xs text-muted-foreground">{desc}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="font-space text-xs w-full border-white/[0.1] hover:border-accent/30 hover:text-accent transition-all duration-200"
              >
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
