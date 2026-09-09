import {
  Megaphone,
  Target,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  CalendarDays,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

function Marketing() {
  const challenges = [
    {
      icon: CalendarDays,
      title: "Campaign Planning",
      description:
        "Keep campaigns, content calendars and deadlines organized in one place.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Help designers, marketers and content teams stay aligned on every project.",
    },
    {
      icon: Workflow,
      title: "Manual Work",
      description:
        "Automate repetitive tasks so your team can focus on creative work.",
    },
  ];

  const features = [
    "AI-powered campaign planning",
    "Smart content calendar",
    "Automated marketing workflows",
    "Real-time team collaboration",
    "Campaign performance tracking",
    "Centralized creative workspace",
  ];

  const workflow = [
    {
      number: "01",
      title: "Plan",
      description:
        "Create campaigns, set goals and organize your marketing strategy.",
    },
    {
      number: "02",
      title: "Create",
      description:
        "Collaborate with your team and manage content from one workspace.",
    },
    {
      number: "03",
      title: "Grow",
      description:
        "Track performance and use insights to improve future campaigns.",
    },
  ];

  const stats = [
    {
      value: "45%",
      label: "Faster Campaign Planning",
    },
    {
      value: "3x",
      label: "Better Team Collaboration",
    },
    {
      value: "60%",
      label: "Less Manual Work",
    },
    {
      value: "10k+",
      label: "Marketing Teams",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32">

        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-pink-600/20 blur-[120px]" />

        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
            <Megaphone size={16} />
            Built for modern marketing teams
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Create. Collaborate.
            <span className="block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            NOVA helps marketing teams plan campaigns, automate workflows
            and collaborate seamlessly from idea to execution.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30"
            >
              Start Creating

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/features"
              className="flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
            >
              Explore Features
            </Link>

          </div>

        </div>

      </section>


      {/* Challenges */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Marketing Challenges
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Great campaigns need
              <br />
              great workflows.
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:bg-pink-500/5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
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

            <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Marketing Productivity
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              More creativity.
              <br />
              Less busy work.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
              NOVA brings your campaigns, content and team communication
              into one intelligent workspace so your team can focus on
              creating better marketing.
            </p>


            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={19}
                    className="text-pink-400"
                  />

                  {feature}
                </div>
              ))}

            </div>


            <Link
              to="/features"
              className="group mt-10 inline-flex items-center gap-2 text-pink-400 transition hover:text-pink-300"
            >
              Explore marketing features

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>


          {/* Campaign Visual */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-violet-500/10 p-6 sm:p-8">

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-400">
                    Campaign Performance
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    +68.4%
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <TrendingUp size={24} />
                </div>

              </div>


              <div className="mt-8 space-y-5">

                <div>

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">
                      Social Campaign
                    </span>

                    <span>
                      88%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                  </div>

                </div>


                <div>

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">
                      Content Production
                    </span>

                    <span>
                      74%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[74%] rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                  </div>

                </div>


                <div>

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">
                      Lead Generation
                    </span>

                    <span>
                      92%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                  </div>

                </div>

              </div>


              <div className="mt-6 flex items-center gap-3 rounded-xl border border-pink-500/20 bg-pink-500/5 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                  <Target size={20} />
                </div>

                <div>
                  <p className="font-semibold">
                    Campaign Goal Reached
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Your team is performing above target
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Simple Workflow
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From idea to growth
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {workflow.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-pink-500/40"
              >

                <span className="text-5xl font-bold text-pink-500/20">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-400">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition hover:-translate-y-1 hover:border-pink-500/40"
              >

                <h3 className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
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

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-pink-500/30 bg-gradient-to-r from-pink-600/20 to-violet-600/20 px-6 py-16 text-center sm:px-12">

          <Megaphone
            size={38}
            className="mx-auto text-pink-400"
          />

          <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
            Ready to grow your marketing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Bring your entire marketing workflow into one intelligent
            workspace and help your team create more, faster.
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

export default Marketing;