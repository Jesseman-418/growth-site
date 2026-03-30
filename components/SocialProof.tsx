export default function SocialProof() {
  const perks = [
    {
      title: "Best Revenue Split",
      description:
        "Early partners lock in the most favorable terms — 65% to you, guaranteed.",
    },
    {
      title: "Priority Attention",
      description:
        "Fewer clients means more of my time dedicated to your launch and success.",
    },
    {
      title: "Founding Partner Status",
      description:
        "First-in-line for re-launches, new products, and scaling opportunities.",
    },
    {
      title: "Case Study Collaboration",
      description:
        "We document the win together — social proof that benefits both of us.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-sm text-brand-400 border border-brand-500/20 mb-6">
              Transparency
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              I&apos;m Building This From the Ground Up
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
              Growth Operating is new, and I&apos;m being upfront about it. My
              first creator partnerships are currently in the build phase.
            </p>
            <p className="text-gray-500 text-sm max-w-lg mx-auto mb-10">
              That means early partners get advantages you won&apos;t find
              anywhere else:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="glass glass-hover rounded-xl p-6 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-100 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
