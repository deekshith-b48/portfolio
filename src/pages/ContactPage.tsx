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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deekshithbgowda48@gmail.com",
      href: "mailto:deekshithbgowda48@gmail.com",
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
      <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8 space-y-6 md:space-y-12">
        
        {/* Resume Download Section */}
        <ResumeDownload />
        
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-medium">
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            Let's Connect
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interested in collaborating or have an opportunity? I'd love to connect and discuss how we can work together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h2>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-accent/20 border border-accent/30">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm">{info.label}</h3>
                            {info.href ? (
                              <a 
                                href={info.href}
                                className="text-accent hover:text-accent/80 transition-colors text-sm break-all"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{info.value}</p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Social Media</h2>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Card key={index} className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300">
                      <CardContent className="p-4">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 group"
                        >
                          <div className="p-2 rounded-lg bg-accent/20 border border-accent/30 group-hover:bg-accent/30 transition-colors">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">{social.label}</h3>
                            <p className="text-sm text-muted-foreground">{social.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{social.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Send Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or any questions you have..."
                      required
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Quick tip:</strong> Include details about your project timeline, budget, or specific requirements to help me provide a better response.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">Direct Email</h3>
              <p className="text-xs text-muted-foreground mb-3">Quick response guaranteed</p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href="mailto:deekshithbgowda48@gmail.com">
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 text-center">
              <Linkedin className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">LinkedIn</h3>
              <p className="text-xs text-muted-foreground mb-3">Professional networking</p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href="https://linkedin.com/in/deekshithb48" target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 text-center">
              <Github className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">GitHub</h3>
              <p className="text-xs text-muted-foreground mb-3">Check out my code</p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href="https://github.com/deekshith-b48" target="_blank" rel="noopener noreferrer">
                  Follow
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 hover:border-accent/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">Schedule Call</h3>
              <p className="text-xs text-muted-foreground mb-3">Available for meetings</p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <a href="mailto:deekshithbgowda48@gmail.com?subject=Schedule%20a%20Call">
                  Schedule
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
