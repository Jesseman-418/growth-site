"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does it cost?",
    answer:
      "$0 upfront. No retainer, no monthly fee, no hidden costs. This is a revenue share partnership — I only make money when you make money. My cut comes from a percentage of the product sales, so my incentives are completely aligned with yours.",
  },
  {
    question: "What kind of product will we build?",
    answer:
      "It depends on your audience and expertise. Common products include online courses, coaching programs, community memberships, template packs, and digital toolkits. During our strategy call, I'll analyze your content and audience to recommend the best product type and price point for maximum revenue.",
  },
  {
    question: "How long does it take?",
    answer:
      "Typically 2-3 weeks to build the product and all the launch assets, then 2 weeks for the launch itself. So roughly 4-5 weeks from our first call to money in your account. I move fast because I use AI-powered workflows to handle the heavy lifting.",
  },
  {
    question: "What if it doesn't sell?",
    answer:
      "You risk nothing. If the launch doesn't generate sales, I've worked for free. That's why I'm selective about who I partner with — I only take on creators where I'm confident the math works. I do my homework on your audience, engagement, and niche before committing.",
  },
  {
    question: "What's the revenue split?",
    answer:
      "Typically 65% to you, 35% to me. This can vary slightly depending on the scope of work and how much ongoing support you need post-launch. We agree on the split before starting, and it's locked in with a partnership agreement. No surprises.",
  },
  {
    question: "How much work do I need to do?",
    answer:
      "Minimal. Your main job is showing up for a strategy call, reviewing what I build, and posting the launch content I script for you. I handle the product creation, tech setup, sales copy, and launch strategy. Think of me as your behind-the-scenes product team.",
  },
  {
    question: "What if I already tried launching something and it failed?",
    answer:
      "That's more common than you'd think, and it doesn't mean your audience won't buy. Most failed launches come down to wrong product, wrong positioning, or wrong launch strategy — not a bad audience. I'll analyze what went wrong and build something your audience actually wants.",
  },
  {
    question: "How do I know you're legit?",
    answer:
      "Fair question. Here's why the model itself protects you: I take zero money upfront. If I can't deliver results, I work for free. There's no scenario where you lose. I'm also happy to share my process, walk you through the entire plan before we start, and answer any questions on our call.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-brand-400 transition-colors pr-8">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-400" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Questions you probably
            <br />
            <span className="gradient-text">have</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="glass rounded-2xl px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
