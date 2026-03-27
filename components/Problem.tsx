export default function Problem() {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "No time to build a product",
      description:
        "You're already creating content, managing your audience, and running your brand. Building a course or coaching program from scratch? That's another full-time job.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
      title: "Don't know where to start",
      description:
        "Product ideas, sales pages, payment systems, launch strategy, email sequences... the tech stack alone is overwhelming. You need someone who's done this before.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      title: "Tried before and it flopped",
      description:
        "Maybe you launched something that didn't sell, or you started building and never finished. Without a proven system and a partner invested in the outcome, most launches fail.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            You have the audience. You have the expertise.
            <br />
            <span className="text-gray-400">
              But turning that into a product? That&apos;s a different game.
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Building a digital product, writing sales pages, setting up payments,
            running a launch... it&apos;s a full-time job on top of the one you
            already have. Most creators know they&apos;re leaving money on the
            table &mdash; they just don&apos;t have the bandwidth to pick it up.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
