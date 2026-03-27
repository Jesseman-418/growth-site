export default function SocialProof() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-400 mx-auto mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              First Partnerships Launching Now
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Growth Operating is new, and I&apos;m being upfront about it. My first
              creator partnerships are currently in the build phase. This section
              will be filled with real case studies and testimonials soon.
            </p>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              That said &mdash; being early means you get my full attention, the best
              revenue split, and a partner who&apos;s hungry to prove the model works.
              The first creators to partner with me will get the best deal.
            </p>

            {/* Early partner benefit tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "Best revenue split",
                "Priority attention",
                "Founding partner status",
                "Case study collaboration",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
