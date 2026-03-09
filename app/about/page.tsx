import TeamMember from "@/components/TeamMember";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in React and Next.js.",
      imageColor: "from-blue-400 to-blue-600",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Passionate about creating beautiful and intuitive user interfaces.",
      imageColor: "from-purple-400 to-purple-600",
    },
    {
      name: "Marcus Lee",
      role: "DevOps Engineer",
      bio: "Specializes in cloud infrastructure and deployment automation.",
      imageColor: "from-green-400 to-green-600",
    },
  ];

  const milestones = [
    { year: "2024", title: "Project Started", description: "Initial concept and architecture design" },
    { year: "2025", title: "First Release", description: "Version 1.0 with core features" },
    { year: "2026", title: "Production Ready", description: "Full deployment pipeline and documentation" },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About NextDeploy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern Next.js template designed to help developers build and deploy 
            production-ready applications faster than ever.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 mb-16 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that every developer should have access to a production-ready 
              Next.js template that includes best practices, modern tooling, and 
              automatic deployment out of the box.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Speed</div>
                <p className="text-muted-foreground">Get from idea to deployment in minutes</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Quality</div>
                <p className="text-muted-foreground">Production-grade code and architecture</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Simplicity</div>
                <p className="text-muted-foreground">Easy to understand and customize</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2"></div>
                <div className="relative z-10">
                  <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                    <div className="text-2xl font-bold text-foreground mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {milestone.title}
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-secondary rounded-3xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Next.js 14", "TypeScript", "Tailwind CSS", "React 18", "Vercel", "ESLint", "Prettier", "GitHub Actions"].map((tech) => (
              <div
                key={tech}
                className="bg-card p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="font-semibold text-foreground">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}