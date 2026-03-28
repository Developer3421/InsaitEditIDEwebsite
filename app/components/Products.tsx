type StatusBadgeProps = {
  status: "available" | "coming-soon";
};

function StatusBadge({ status }: StatusBadgeProps) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-900/40 text-green-400 border border-green-700/40">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Available
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-900/30 text-orange-400 border border-orange-700/40">
      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
      Coming Soon
    </span>
  );
}

type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "available" | "coming-soon";
  githubUrl?: string;
  icon: React.ReactNode;
  features: string[];
  codeSnippet: {
    filename: string;
    lines: Array<{ text: string; color: string }>;
  };
};

const products: Product[] = [
  {
    id: "csharp",
    name: "Insait Edit IDE C#",
    tagline: "Power your .NET development",
    description:
      "A fully-featured integrated development environment crafted specifically for C# and .NET developers. Enjoy smart IntelliSense, debugging tools, and seamless project management.",
    status: "available",
    githubUrl: "https://github.com/Developer3421",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C2.56 15.77 2 14.16 2 12.21c.05-2.31.72-4.08 2-5.29C5.29 5.72 6.85 5.12 8.7 5.1c.75 0 1.4.07 1.94.19s.88.25 1.12.38l-.34 2.5-.76-.28c-.29-.09-.67-.14-1.15-.14-1.06.02-1.9.4-2.5 1.13-.6.73-.9 1.71-.9 2.97 0 1.18.28 2.09.85 2.75.57.66 1.37 1 2.4 1.01.43 0 .82-.05 1.16-.13l.88-.31zM13 17.5h2l.5-3H17l.5 3h2l-2-11h-3l-1.5 8.5zm2.5-5l.5-3h1l.5 3h-2z" />
      </svg>
    ),
    features: [
      "Smart IntelliSense & autocomplete",
      "Integrated .NET debugger",
      "Project & solution management",
      "Syntax highlighting & themes",
      "Code refactoring tools",
      "Built-in terminal",
    ],
    codeSnippet: {
      filename: "Program.cs",
      lines: [
        { text: "using System;", color: "text-purple-400" },
        { text: "", color: "" },
        { text: "class HelloWorld {", color: "text-orange-300" },
        { text: "  static void Main() {", color: "text-purple-300" },
        { text: '    Console.WriteLine("Hello!");', color: "text-green-400" },
        { text: "  }", color: "text-purple-300" },
        { text: "}", color: "text-orange-300" },
      ],
    },
  },
  {
    id: "php",
    name: "Insait Edit IDE PHP",
    tagline: "Supercharge your PHP workflow",
    description:
      "An advanced IDE tailored for PHP developers. With smart code completion, framework integration, and powerful debugging capabilities, your PHP projects will reach new heights.",
    status: "coming-soon",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.477-.29-.906-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.352 1.918H3.743l1.12-6.05H7.1c.74 0 1.271.173 1.59.518.318.344.399.843.243 1.492-.112.464-.314.844-.593 1.407zm4.95-1.365h-1.43l-.35 1.902h1.315c.547 0 .948-.116 1.202-.347.254-.232.426-.609.516-1.131.087-.485.027-.809-.177-.972-.204-.163-.543-.245-1.076-.245v-.793zm3.17-.745c-.205-.21-.55-.315-1.034-.315h-.883l-.495 2.614h.784c.493 0 .875-.1 1.15-.3.274-.2.458-.527.553-1 .085-.457.03-.786-.075-.999zm1.346 4.316h-1.237l1.12-6.05h2.234c.738 0 1.268.175 1.59.527.32.35.4.854.24 1.508-.148.607-.432 1.076-.858 1.408-.426.33-.972.495-1.637.495h-.936l-.516 2.112z" />
      </svg>
    ),
    features: [
      "PHP 8+ syntax support",
      "Composer integration",
      "Laravel & Symfony tools",
      "Xdebug support",
      "Database query builder",
      "REST API testing",
    ],
    codeSnippet: {
      filename: "index.php",
      lines: [
        { text: "<?php", color: "text-purple-400" },
        { text: "", color: "" },
        { text: "declare(strict_types=1);", color: "text-orange-300" },
        { text: "", color: "" },
        { text: "function greet(string $name): string {", color: "text-purple-300" },
        { text: '  return "Hello, $name!";', color: "text-green-400" },
        { text: "}", color: "text-purple-300" },
      ],
    },
  },
  {
    id: "web",
    name: "Insait Edit IDE Web",
    tagline: "Build the web of tomorrow",
    description:
      "A cutting-edge IDE designed for modern web development. From HTML/CSS to React, Vue, and beyond — everything you need to craft exceptional web experiences.",
    status: "coming-soon",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    features: [
      "HTML, CSS, JS/TS support",
      "React, Vue, Angular plugins",
      "Live preview & hot reload",
      "npm/yarn integration",
      "Emmet & CSS tooling",
      "Responsive design tools",
    ],
    codeSnippet: {
      filename: "App.tsx",
      lines: [
        { text: "import React from 'react';", color: "text-purple-400" },
        { text: "", color: "" },
        { text: "export default function App() {", color: "text-orange-300" },
        { text: "  return (", color: "text-purple-300" },
        { text: "    <h1>Hello World!</h1>", color: "text-green-400" },
        { text: "  );", color: "text-purple-300" },
        { text: "}", color: "text-orange-300" },
      ],
    },
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-50"
          style={{ background: "linear-gradient(90deg, transparent, #a855f7, #f97316, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-50"
          style={{ background: "linear-gradient(90deg, transparent, #f97316, #a855f7, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-900/10 text-orange-400 text-sm font-medium mb-6">
            Product Line
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Choose Your</span>{" "}
            <span className="gradient-text">IDE</span>
          </h2>
          <p className="text-purple-300 text-lg max-w-xl mx-auto">
            Three specialized IDEs built on the same powerful Insait Edit engine,
            each crafted for a specific development ecosystem.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-purple rounded-2xl p-6 flex flex-col transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-orange-400"
                  style={{ background: "linear-gradient(135deg, rgba(107,33,168,0.4), rgba(249,115,22,0.2))" }}>
                  {product.icon}
                </div>
                <StatusBadge status={product.status} />
              </div>

              {/* Product info */}
              <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
              <p className="text-orange-400 text-sm font-medium mb-3">{product.tagline}</p>
              <p className="text-purple-300 text-sm leading-relaxed mb-6">{product.description}</p>

              {/* Code snippet */}
              <div className="code-window rounded-lg overflow-hidden mb-6 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#16162a] border-b border-purple-800/30">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-purple-400 font-mono">{product.codeSnippet.filename}</span>
                </div>
                <div className="px-4 py-3 font-mono leading-5">
                  {product.codeSnippet.lines.map((line, i) => (
                    <div key={i} className={line.color || "text-purple-200"}>
                      {line.text || "\u00A0"}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 flex-1">
                <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">Key Features</p>
                <ul className="space-y-2">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-purple-200 text-sm">
                      <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              {product.status === "available" && product.githubUrl ? (
                <a
                  href={product.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 rounded-xl text-white font-semibold text-center block"
                >
                  View on GitHub →
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-3 rounded-xl font-semibold text-center border border-purple-700/40 text-purple-500 cursor-not-allowed opacity-60"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
