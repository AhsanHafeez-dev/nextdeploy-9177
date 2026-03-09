"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "contact@nextdeploy.app",
      icon: "📧",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "GitHub",
      value: "github.com/nextdeploy",
      icon: "💻",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Twitter",
      value: "@nextdeploy",
      icon: "🐦",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Discord",
      value: "discord.gg/nextdeploy",
      icon: "💬",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about NextDeploy? Want to contribute? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center">
                <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-green-600 dark:text-green-400">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="support">Technical Support</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="contribution">Contribution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-2xl mb-4`}>
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Is NextDeploy free to use?",
                    a: "Yes, NextDeploy is completely free and open source.",
                  },
                  {
                    q: "Can I use this for commercial projects?",
                    a: "Absolutely! This template is MIT licensed and can be used for any purpose.",
                  },
                  {
                    q: "How do I deploy my application?",
                    a: "Simply push to GitHub and connect to Vercel for automatic deployment.",
                  },
                  {
                    q: "Can I contribute to the project?",
                    a: "Yes! We welcome contributions on GitHub.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-card rounded-xl p-5 border border-border">
                    <div className="font-semibold text-foreground mb-2">
                      {faq.q}
                    </div>
                    <div className="text-muted-foreground">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 bg-gray-900 text-white rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold mb-2">24h</div>
                  <div className="text-gray-300">Average Response Time</div>
                </div>
                <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}