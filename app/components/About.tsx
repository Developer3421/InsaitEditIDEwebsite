export default function About() {
  const stats = [
    { value: "3+", label: "IDEs in the Suite" },
    { value: "Open", label: "Source on GitHub" },
    { value: "∞", label: "Possibilities" },
  ];

  const roadmapProgress = ["85%", "30%", "5%"];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-40"
          style={{ background: "linear-gradient(90deg, transparent, #a855f7, #f97316, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/10 text-orange-400 text-sm font-medium mb-6">
              About Insait Edit
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Built by Developers,</span>
              <br />
              <span className="gradient-text">for Developers</span>
            </h2>
            <p className="text-purple-300 text-lg leading-relaxed mb-6">
              Insait Edit is an ambitious open-source IDE product line started by a solo developer
              with a vision: to create fast, modern, and beautiful development environments for
              the languages developers love most.
            </p>
            <p className="text-purple-400 text-base leading-relaxed mb-8">
              Starting with C#, the roadmap includes fully-featured IDEs for PHP and Web development.
              Each IDE is carefully designed with performance and developer experience at its core,
              wrapped in the signature Insait Edit purple-orange aesthetic.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Developer3421"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-xl text-white font-semibold inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
              <a
                href="#products"
                className="btn-outline px-6 py-3 rounded-xl text-purple-200 font-semibold inline-flex items-center gap-2"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Right: Stats & roadmap */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="card-purple rounded-xl p-5 text-center">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-purple-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Roadmap */}
            <div className="card-purple rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Product Roadmap
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Insait Edit IDE C#", status: "Available", color: "bg-green-500" },
                  { name: "Insait Edit IDE PHP", status: "In Development", color: "bg-orange-500" },
                  { name: "Insait Edit IDE Web", status: "Planned", color: "bg-purple-500" },
                ].map((item, i) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-700/50 text-purple-400 text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-200 font-medium text-sm">{item.name}</span>
                        <span className="flex items-center gap-1.5 text-xs text-purple-400">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                          {item.status}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-purple-900/60 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            background: "linear-gradient(90deg, #a855f7, #f97316)",
                            width: roadmapProgress[i],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
