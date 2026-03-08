const FeaturesSection = () => {
  const features = [
    {
      title: "TypeScript Ready",
      description: "Full TypeScript support with strict type checking and modern ES6+ features.",
      icon: "🚀",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with responsive design.",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "API Routes",
      description: "Built-in API routes for serverless functions with automatic TypeScript support.",
      icon: "⚡",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Automatic Deployment",
      description: "One-click deployment to Vercel with automatic CI/CD pipeline.",
      icon: "🚀",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Responsive Design",
      description: "Mobile-first responsive design that works on all screen sizes.",
      icon: "📱",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Modern Components",
      description: "Reusable React components with proper state management and hooks.",
      icon: "🧩",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete Next.js stack with modern tools and best practices built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`h-14 w-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Included</span>
                  <span className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for Production
              </h3>
              <p className="text-gray-600 max-w-2xl">
                This application includes everything needed for production deployment:
                environment variables, security headers, performance optimization, 
                and automatic deployment configuration.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Documentation
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-500 transition-colors">
                Explore Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;