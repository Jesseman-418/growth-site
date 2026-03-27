export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative glass rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to turn your audience
              <br />
              <span className="gradient-text">into income?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute strategy call. I&apos;ll analyze your audience,
              suggest the best product opportunity, and show you the revenue math
              &mdash; no strings attached.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:njessemandevamirtham@gmail.com?subject=Strategy Call — Growth Operating&body=Hey Jesse,%0A%0AI'm interested in partnering to launch a digital product. Here's a bit about me:%0A%0A- My Instagram: %0A- My niche: %0A- Follower count: %0A%0ALet's chat!"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-brand-500/25"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="https://instagram.com/direct/t/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-gray-300 font-medium text-lg transition-all"
              >
                DM Me on Instagram
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <a
                href="mailto:njessemandevamirtham@gmail.com"
                className="flex items-center gap-2 hover:text-brand-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                njessemandevamirtham@gmail.com
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
