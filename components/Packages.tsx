const packages = [
  {
    name: "Launch Partner",
    price: "Revenue Share",
    period: "",
    description:
      "I build and launch a digital product from your existing content. You post stories. We split revenue.",
    features: [
      "Full product creation from your content (course, program, or community)",
      "Sales page copywriting + design",
      "14-day Instagram story launch sequence scripted for you",
      "Email sequence for your existing list",
      "DM automation + FAQ handling",
      "Post-launch optimization and scaling",
      "$0 upfront — we split revenue (65% you / 35% me)",
    ],
    highlight: true,
    cta: "Zero Risk",
  },
  {
    name: "Content Engine",
    price: "$2,000",
    period: "/month",
    description:
      "Your podcast and long-form content, turned into a daily social media machine.",
    features: [
      "3-4 Instagram carousels per week from your existing episodes",
      "Weekly newsletter draft from episode highlights",
      "Social media captions + hooks optimized for engagement",
      "Content calendar with posting schedule",
      "Monthly performance review + strategy adjustments",
    ],
    highlight: false,
    cta: "Predictable Growth",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Two ways to
            <br />
            <span className="gradient-text">grow your revenue</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pick what fits your goals. Both are designed to turn your content
            into money without adding to your workload.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass rounded-2xl p-8 transition-all duration-300 relative ${
                pkg.highlight
                  ? "border-brand-500/30 hover:border-brand-500/50"
                  : "glass-hover"
              }`}
            >
              {pkg.cta && (
                <span
                  className={`absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full ${
                    pkg.highlight
                      ? "bg-brand-500 text-white"
                      : "bg-white/5 text-gray-400 border border-white/10"
                  }`}
                >
                  {pkg.cta}
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {pkg.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold gradient-text">
                  {pkg.price}
                </span>
                {pkg.period && (
                  <span className="text-gray-500">{pkg.period}</span>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-brand-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3.5 rounded-xl font-medium transition-all ${
                  pkg.highlight
                    ? "bg-brand-500 hover:bg-brand-600 text-white hover:shadow-lg hover:shadow-brand-500/25"
                    : "glass glass-hover text-gray-300"
                }`}
              >
                Book a Free Strategy Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
