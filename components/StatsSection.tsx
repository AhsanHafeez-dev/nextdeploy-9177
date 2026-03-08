"use client";

import { useState, useEffect } from "react";

const StatsSection = () => {
  const [stats, setStats] = useState([
    { value: 0, label: "Components", suffix: "+" },
    { value: 0, label: "API Routes", suffix: "" },
    { value: 0, label: "Pages", suffix: "" },
    { value: 0, label: "Lines of Code", suffix: "+" },
  ]);

  useEffect(() => {
    const targetValues = [15, 5, 4, 1200];
    const duration = 2000;
    const steps = 60;
    const increment = targetValues.map(val => val / steps);
    
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(interval);
        return;
      }
      
      setStats(prev => prev.map((stat, index) => ({
        ...stat,
        value: Math.round(increment[index] * currentStep)
      })));
      
      currentStep++;
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built with Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive Next.js application with production-ready features.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative inline-block">
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold mb-2">100%</div>
            <div className="text-gray-300">Type Coverage</div>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full w-full"></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold mb-2">A+</div>
            <div className="text-gray-300">Performance Score</div>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full w-4/5"></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold mb-2">0ms</div>
            <div className="text-gray-300">Build Time</div>
            <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;