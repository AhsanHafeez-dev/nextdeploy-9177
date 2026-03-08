"use client";

import { useState } from "react";
import Link from "next/link";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Your Next.js App?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get started with this production-ready template. Everything is set up for automatic deployment.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link
              href="/api-demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Live Demo
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View on GitHub
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Deployment Updates
            </h3>
            <p className="text-blue-100 mb-6">
              Subscribe to get notified about new features and deployment tips.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {submitted ? "Subscribed! ✅" : "Subscribe"}
              </button>
            </form>
            
            {submitted && (
              <div className="mt-4 text-green-300 animate-pulse">
                Thank you! You'll receive deployment updates soon.
              </div>
            )}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-blue-200 text-sm">Clone Repo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2</div>
              <div className="text-blue-200 text-sm">Install Dependencies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-blue-200 text-sm">Customize</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-blue-200 text-sm">Deploy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;