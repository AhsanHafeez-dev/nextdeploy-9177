"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                🚀 Fully Deployed & Ready
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build & Deploy Modern
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Next.js Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              A production-ready Next.js application with TypeScript, Tailwind CSS, 
              and automatic deployment. Everything you need to launch your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/api-demo"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity text-center shadow-lg hover:shadow-xl"
              >
                Try API Demo
              </Link>
              <Link
                href="/about"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-500 transition-colors text-center shadow-sm hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>Responsive</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20"
                style={{ transform: `rotate(${rotation}deg)` }}
              ></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-mono text-gray-500">app/page.tsx</div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-gray-400 w-8">1</span>
                    <span className="text-blue-600">export default</span>
                    <span className="text-purple-600"> function</span>
                    <span className="text-gray-900"> Home()</span>
                    <span className="text-gray-900"> {"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">2</span>
                    <span className="text-blue-600 ml-4">return</span>
                    <span className="text-gray-900"> (</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">3</span>
                    <span className="text-gray-900 ml-8">{"<div>"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">4</span>
                    <span className="text-gray-900 ml-12">{"<HeroSection />"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">5</span>
                    <span className="text-gray-900 ml-12">{"<FeaturesSection />"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">6</span>
                    <span className="text-gray-900 ml-12">{"<StatsSection />"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">7</span>
                    <span className="text-gray-900 ml-12">{"<CTASection />"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">8</span>
                    <span className="text-gray-900 ml-8">{"</div>"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">9</span>
                    <span className="text-gray-900 ml-4">)</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-8">10</span>
                    <span className="text-gray-900">{"}"}</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Deployment Status</div>
                      <div className="font-semibold text-green-600">✅ Live on Vercel</div>
                    </div>
                    <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;