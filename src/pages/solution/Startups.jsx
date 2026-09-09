import {
  Rocket,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

function Startups() {
  const challenges = [
    {
      icon: Clock,
      title: "Limited Time",
      description:
        "Small teams need to move fast without wasting time on repetitive work.",
    },
    {
      icon: Users,
      title: "Growing Teams",
      description:
        "Keep everyone aligned as your startup grows and new members join.",
    },
    {
      icon: Workflow,
      title: "Complex Workflows",
      description:
        "Manage projects, tasks and processes without unnecessary complexity.",
    },
  ];

  const features = [
    "AI-powered task management",
    "Automated repetitive workflows",
    "Real-time team collaboration",
    "Smart project insights",
    "Centralized workspace",
    "Easy team scaling",
  ];

  const stats = [
    { value: "40%", label: "More Productivity" },
    { value: "3x", label: "Faster Workflows" },
    { value: "10k+", label: "Teams Growing" },
    { value: "99.9%", label: "Platform Uptime" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32">

        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Rocket size={16} />
            Built for ambitious startups
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Move Faster.
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Build Smarter.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            NOVA helps startups organize projects, automate repetitive tasks
            and keep teams aligned so you can focus on building what matters.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Start Building

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/pricing"
              className="flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
            >
              View Pricing
            </Link>

          </div>

        </div>

      </section>


      {/* Challenges */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-violet-400">
              Startup Challenges
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Growing a startup is hard.
              <br />
              Your tools shouldn't be.
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {challenge.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-400">
                    {challenge.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-violet-400">
              Built for Growth
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Everything your startup needs
              to move faster.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
              NOVA brings your projects, team communication and workflows
              into one intelligent workspace powered by AI.
            </p>


            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={19}
                    className="text-violet-400"
                  />

                  {feature}
                </div>
              ))}

            </div>


            <Link
              to="/features"
              className="group mt-10 inline-flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
            >
              Explore all features

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>


          {/* Visual Card */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-8">

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Startup Growth
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    +42.8%
                  </h3>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <BarChart3 size={24} />
                </div>

              </div>


              <div className="mt-8 space-y-4">

                <div>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="text-slate-400">
                      Product Development
                    </span>

                    <span>
                      85%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10">

                    <div className="h-2 w-[85%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />

                  </div>

                </div>


                <div>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="text-slate-400">
                      Team Productivity
                    </span>

                    <span>
                      72%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10">

                    <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />

                  </div>

                </div>


                <div>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="text-slate-400">
                      Workflow Automation
                    </span>

                    <span>
                      91%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-white/10">

                    <div className="h-2 w-[91%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition hover:-translate-y-1 hover:border-violet-500/40"
              >

                <h3 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-400">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-r from-violet-600/20 to-blue-600/20 px-6 py-16 text-center sm:px-12">

          <Zap
            size={38}
            className="mx-auto text-yellow-400"
          />

          <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
            Ready to build something amazing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Join thousands of ambitious startups using NOVA
            to build faster and work smarter.
          </p>

          <Link
            to="/signup"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-xl"
          >
            Get Started Free

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Startups;
