import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Minus,
  Check,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 3 projects",
      "Basic AI tools",
      "Up to 5 team members",
      "1GB storage",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need more power.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "Unlimited projects",
      "Advanced AI tools",
      "Unlimited team members",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Advanced tools for large organizations.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Everything in Pro",
      "Enterprise AI tools",
      "Advanced security",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
    ],
    popular: false,
  },
];

const comparisonFeatures = [
  {
    name: "Projects",
    starter: "3 Projects",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "AI Automation",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Enterprise",
  },
  {
    name: "Team Members",
    starter: "5 Members",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Storage",
    starter: "1GB",
    pro: "50GB",
    enterprise: "Unlimited",
  },
  {
    name: "Analytics",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Priority Support",
    starter: false,
    pro: true,
    enterprise: true,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-24">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Simple Pricing
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-7xl">
            Pricing that grows
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              with your team.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Start for free and upgrade whenever you need more powerful
            features for your growing team.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">

            <span
              className={`text-sm font-medium ${
                !isYearly ? "text-white" : "text-slate-500"
              }`}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative h-8 w-16 rounded-full transition ${
                isYearly ? "bg-violet-500" : "bg-slate-700"
              }`}
              aria-label="Toggle yearly pricing"
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                  isYearly ? "left-9" : "left-1"
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-white" : "text-slate-500"
                }`}
              >
                Yearly
              </span>

              <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-semibold text-green-400">
                Save 20%
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= PRICING CARDS ================= */}
      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">

            {pricingPlans.map((plan) => {

              const price = isYearly
                ? plan.yearlyPrice
                : plan.monthlyPrice;

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? "border-violet-500 bg-violet-500/[0.06] shadow-xl shadow-violet-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-violet-500/40"
                  }`}
                >

                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-1.5 text-xs font-semibold">
                      MOST POPULAR
                    </div>
                  )}

                  <h2 className="text-2xl font-bold">
                    {plan.name}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-8">

                    <div className="flex items-end">
                      <span className="text-5xl font-bold">
                        ${price}
                      </span>

                      <span className="mb-1 ml-2 text-slate-400">
                        {price === 0 ? "/ forever" : "/ month"}
                      </span>
                    </div>

                    {isYearly && price > 0 && (
                      <p className="mt-2 text-xs text-green-400">
                        Billed annually
                      </p>
                    )}

                  </div>

                  {/* Button */}
                  <Link
                    to="/signup"
                    className={`mt-8 block rounded-xl px-5 py-3 text-center font-semibold transition ${
                      plan.popular
                        ? "bg-gradient-to-r from-violet-500 to-blue-500 hover:shadow-lg hover:shadow-violet-500/30"
                        : "border border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {price === 0 ? "Start For Free" : "Get Started"}
                  </Link>

                  <div className="my-8 border-t border-white/10" />

                  <p className="text-sm font-medium text-slate-300">
                    Everything you need:
                  </p>

                  <div className="mt-5 space-y-4">

                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="shrink-0 text-violet-400"
                        />

                        <span className="text-sm text-slate-400">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= COMPARISON TABLE ================= */}
      <section className="border-y border-white/10 bg-slate-900/50 py-24">

        <div className="mx-auto max-w-6xl px-5 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Compare Plans
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Find the perfect plan
              <span className="block text-violet-400">
                for your team.
              </span>
            </h2>

          </div>


          {/* Table */}
          <div className="mt-14 overflow-x-auto rounded-2xl border border-white/10">

            <table className="w-full min-w-[700px]">

              <thead className="bg-white/[0.03]">

                <tr className="border-b border-white/10">

                  <th className="px-6 py-5 text-left text-sm text-slate-400">
                    Features
                  </th>

                  <th className="px-6 py-5 text-center">
                    Starter
                  </th>

                  <th className="px-6 py-5 text-center text-violet-400">
                    Pro
                  </th>

                  <th className="px-6 py-5 text-center">
                    Enterprise
                  </th>

                </tr>

              </thead>

              <tbody>

                {comparisonFeatures.map((feature) => (
                  <tr
                    key={feature.name}
                    className="border-b border-white/10 last:border-0"
                  >

                    <td className="px-6 py-5 text-sm font-medium">
                      {feature.name}
                    </td>

                    <td className="px-6 py-5 text-center text-sm text-slate-400">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check
                            size={18}
                            className="mx-auto text-green-400"
                          />
                        ) : (
                          <Minus
                            size={18}
                            className="mx-auto text-slate-600"
                          />
                        )
                      ) : (
                        feature.starter
                      )}
                    </td>

                    <td className="px-6 py-5 text-center text-sm text-slate-400">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check
                            size={18}
                            className="mx-auto text-green-400"
                          />
                        ) : (
                          <Minus
                            size={18}
                            className="mx-auto text-slate-600"
                          />
                        )
                      ) : (
                        feature.pro
                      )}
                    </td>

                    <td className="px-6 py-5 text-center text-sm text-slate-400">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check
                            size={18}
                            className="mx-auto text-green-400"
                          />
                        ) : (
                          <Minus
                            size={18}
                            className="mx-auto text-slate-600"
                          />
                        )
                      ) : (
                        feature.enterprise
                      )}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-24">

        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-slate-900 to-blue-600/20 px-6 py-16 text-center sm:px-12">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Still not sure which plan
              <span className="block text-violet-400">
                is right for you?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Our team is here to help you find the perfect solution
              for your business.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1"
            >
              Contact Us

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Pricing;