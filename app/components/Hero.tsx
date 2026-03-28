export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #6b21a8, transparent)" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 bg-purple-900/20 text-purple-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Introducing the Insait Edit Suite
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          <span className="gradient-text">Insait Edit</span>
          <br />
          <span className="text-white">Your Ultimate</span>
          <br />
          <span className="text-purple-200">IDE Experience</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-purple-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A powerful, modern IDE product line built for developers who demand speed,
          intelligence, and elegance. Code C#, PHP, and Web projects with precision.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="btn-primary px-8 py-4 rounded-xl text-white font-bold text-lg inline-block"
          >
            Explore Products
          </a>
          <a
            href="https://github.com/Developer3421"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-4 rounded-xl text-purple-200 font-bold text-lg inline-block"
          >
            View on GitHub
          </a>
        </div>

        {/* Code snippet preview */}
        <div className="mt-20 max-w-2xl mx-auto animate-float">
          <div className="code-window rounded-xl overflow-hidden shadow-2xl shadow-purple-900/40 animate-glow-pulse">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-purple-800/30">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-purple-400 text-xs font-mono">InsaitEdit.cs</span>
            </div>
            {/* Code content */}
            <div className="px-6 py-5 text-left text-sm font-mono leading-relaxed">
              <div>
                <span className="text-purple-400">using</span>{" "}
                <span className="text-orange-300">InsaitEdit.Core</span>
                <span className="text-purple-200">;</span>
              </div>
              <div className="mt-2">
                <span className="text-purple-400">namespace</span>{" "}
                <span className="text-orange-300">MyApp</span>
                <span className="text-purple-200">;</span>
              </div>
              <div className="mt-3">
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-orange-400">Program</span>
              </div>
              <div>
                <span className="text-purple-200">{"{"}</span>
              </div>
              <div className="ml-6">
                <span className="text-purple-400">public static void</span>{" "}
                <span className="text-orange-400">Main</span>
                <span className="text-purple-200">()</span>
              </div>
              <div className="ml-6">
                <span className="text-purple-200">{"{"}</span>
              </div>
              <div className="ml-12">
                <span className="text-purple-400">Console</span>
                <span className="text-purple-200">.</span>
                <span className="text-orange-400">WriteLine</span>
                <span className="text-purple-200">(</span>
                <span className="text-green-400">&quot;Hello, Insait Edit!&quot;</span>
                <span className="text-purple-200">);</span>
              </div>
              <div className="ml-6">
                <span className="text-purple-200">{"}"}</span>
              </div>
              <div>
                <span className="text-purple-200">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-500">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
