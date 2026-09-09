import { Link } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
  Code2,
  TrendingUp,
  Building2,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    icon: Rocket,
    title: "For Startups",
    description:
      "Move fast, stay focused and build your startup without wasting time on repetitive work.",
    features: [
      "Manage product roadmaps",
      "Organize startup workflows",
      "Automate repetitive tasks",
      "Keep your small team aligned",
    ],
  },
  {
    icon: Code2,
    title: "For Development Teams",
    description:
      "Plan sprints, manage tasks and keep your engineering team aligned from one workspace.",
    features: [
      "Manage sprints and tasks",
      "Track development progress",
      "Collaborate with developers",
      "Automate engineering workflows",
    ],
  },
  {
    icon: TrendingUp,
    title: "For Marketing Teams",
    description:
      "Plan campaigns, organize content and collaborate with your marketing team efficiently.",
    features: [
      "Plan marketing campaigns",
      "Manage content calendars",
      "Track campaign progress",
      "Collaborate on creative ideas",
    ],
  },
  {
    icon: Building2,
    title: "For Enterprise",
    description:
      "Give large organizations the tools, control and flexibility needed to manage complex workflows.",
    features: [
      "Advanced team management",
      "Secure workspaces",
      "Scalable workflows",
      "Dedicated support",
    ],
  },
];

const Solutions = () => {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-24">

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Solutions For Every Team
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Built for the way
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              your team works.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Whether you are building a startup, managing a development team
            or scaling a large organization, NOVA helps your team work
            smarter.
          </p>

        </div>

      </section>


      {/* ================= SOLUTIONS ================= */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="grid items-center gap-12 lg:grid-cols-2"
              >

                {/* Content */}
                <div
                  className={
                    index % 2 !== 0
                      ? "lg:order-2"
                      : ""
                  }
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                    <Icon size={30} />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                    {solution.title}
                  </h2>

                  <p className="mt-5 text-lg leading-relaxed text-slate-400">
                    {solution.description}
                  </p>


                  {/* Features */}
                  <div className="mt-8 space-y-4">

                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={20}
                          className="shrink-0 text-violet-400"
                        />

                        <span className="text-slate-300">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>


                  <Link
                    to="/pricing"
                    className="group mt-8 inline-flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
                  >
                    Get Started

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>

                </div>


                {/* Visual Card */}
                <div
                  className={`relative ${
                    index % 2 !== 0
                      ? "lg:order-1"
                      : ""
                  }`}
                >

                  <div className="absolute inset-0 scale-90 rounded-full bg-blue-600/10 blur-[100px]" />

                  <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-12">

                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">

                      {/* Fake Dashboard Header */}
                      <div className="flex items-center justify-between">

                        <div className="flex gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-400" />
                        </div>

                        <span className="text-xs text-slate-500">
                          NOVA Workspace
                        </span>

                      </div>

                      {/* Dashboard Content */}
                      <div className="mt-8 space-y-4">

                        <div className="h-3 w-3/4 rounded-full bg-violet-500/30" />

                        <div className="h-3 w-full rounded-full bg-white/10" />

                        <div className="h-3 w-5/6 rounded-full bg-white/10" />

                        <div className="h-3 w-2/3 rounded-full bg-white/10" />

                      </div>

                      <div className="mt-8 grid grid-cols-3 gap-3">

                        <div className="h-20 rounded-xl bg-violet-500/20" />

                        <div className="h-20 rounded-xl bg-blue-500/20" />

                        <div className="h-20 rounded-xl bg-white/10" />

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-24">

        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-slate-900 to-blue-600/20 px-6 py-16 text-center sm:px-12">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Find the right solution
              <span className="block text-violet-400">
                for your team.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Start using NOVA today and build a more productive,
              organized and efficient team.
            </p>

            <Link
              to="/pricing"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
            >
              View Pricing

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

export default Solutions;