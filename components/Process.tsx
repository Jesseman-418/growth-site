export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Strategy Call",
      description:
        "We hop on a 30-minute call to map your audience, your expertise, and the best product opportunity. I'll show you exactly what we'd build, how we'd launch it, and the revenue potential based on your following.",
      details: [
        "Audience analysis and niche positioning",
        "Product-market fit assessment",
        "Revenue projection based on your numbers",
        "Launch timeline and game plan",
      ],
    },
    {
      number: "02",
      title: "I Build Everything",
      description:
        "Using your existing content as the foundation, I build the entire product — course modules, coaching frameworks, community structure, whatever fits best. Plus the sales page, checkout system, and delivery setup.",
      details: [
        "Product built from your existing content",
        "Professional sales page and checkout",
        "Email sequences and automations",
        "All tech setup handled for you",
      ],
    },
    {
      number: "03",
      title: "We Launch Together",
      description:
        "I script a 14-day Instagram story launch sequence designed to convert your warm audience into buyers. You post it, I handle the back end. Then we optimize, rinse, and repeat.",
      details: [
        "14-day story launch sequence scripted",
        "DM automation and FAQ handling",
        "Real-time analytics dashboard",
        "Post-launch optimization and scaling",
      ],
    },
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Three steps from audience
            <br />
            <span className="gradient-text">to income</span>
          </h2>
          <p className="text-gray-400 text-lg">
            You focus on what you do best &mdash; creating content and engaging
            your audience. I handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:border-brand-500/20 transition-all duration-500"
            >
              {/* Large background number */}
              <div className="absolute -right-4 -top-8 text-[12rem] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
                {step.number}
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-400 text-sm font-mono font-bold">
                      {step.number}
                    </span>
                    <div className="h-px w-8 bg-brand-500/30" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {step.details.map((detail, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
