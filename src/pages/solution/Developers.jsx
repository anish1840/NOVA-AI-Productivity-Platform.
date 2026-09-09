import {
  Code2,
  GitBranch,
  Bug,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  Workflow,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";

function Developers() {
  const challenges = [
    {
      icon: Workflow,
      title: "Complex Workflows",
      description:
        "Manage multiple projects, tasks and development workflows in one organized workspace.",
    },
    {
      icon: GitBranch,
      title: "Team Collaboration",
      description:
        "Keep developers, designers and product managers aligned throughout the development process.",
    },
    {
      icon: Bug,
      title: "Issue Tracking",
      description:
        "Track bugs, priorities and important development tasks without losing context.",
    },
  ];

  const features = [
    "Smart development workflows",
    "AI-powered task automation",
    "Real-time team collaboration",
    "Project and issue tracking",
    "Centralized documentation",
    "Better sprint planning",
  ];

  const workflow = [
    {
      number: "01",
      title: "Plan",
      description: "Organize features and create development tasks.",
    },
    {
      number: "02",
      title: "Build",
      description: "Collaborate with your team and track progress.",
    },
    {
      number: "03",
      title: "Launch",
      description: "Ship better products with confidence.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32">

        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Code2 size={16} />
            Built for modern development teams
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Build Better Software.
            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            NOVA gives development teams one powerful workspace to manage
            projects, track tasks and collaborate from idea to deployment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Start Building

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

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Developer Challenges
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Coding is hard.
              <br />
              Managing work shouldn't be.
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Developer Productivity
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Focus on code.
              <br />
              NOVA handles the workflow.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-slate-400">
              Spend less time switching between tools and more time building
              great products with your team.
            </p>


            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={19}
                    className="text-blue-400"
                  />

                  {feature}
                </div>
              ))}

            </div>


            <Link
              to="/features"
              className="group mt-10 inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
            >
              Explore developer features

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

          </div>


          {/* Code Visual */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6 sm:p-8">

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">

              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-3 flex items-center gap-2 text-sm text-slate-400">
                  <Terminal size={16} />
                  nova-workspace
                </div>

              </div>


              {/* Code */}
              <div className="space-y-3 p-6 font-mono text-sm">

                <p className="text-violet-400">
                  // Build smarter with NOVA
                </p>

                <p>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-green-400">project</span>{" "}
                  ={" "}
                  <span className="text-yellow-300">"NOVA AI"</span>;
                </p>

                <p>
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-green-400">team</span>{" "}
                  ={" "}
                  <span className="text-yellow-300">"Developers"</span>;
                </p>

                <p className="pt-3 text-slate-400">
                  status:{" "}
                  <span className="text-green-400">
                    ● Building
                  </span>
                </p>

                <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Zap size={20} />
                    </div>

                    <div>
                      <p className="font-sans font-semibold text-white">
                        AI Workflow Active
                      </p>

                      <p className="mt-1 font-sans text-xs text-slate-400">
                        12 tasks automated today
                      </p>
                    </div>

                  </div>

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

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Simple Workflow
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From idea to launch
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {workflow.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >

                <span className="text-5xl font-bold text-blue-500/20">
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


      {/* CTA */}
      <section className="px-5 py-20">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-violet-600/20 px-6 py-16 text-center sm:px-12">

          <Code2
            size={38}
            className="mx-auto text-blue-400"
          />

          <h2 className="mt-6 text-3xl font-bold sm:text-5xl">
            Ready to build better software?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Bring your entire development workflow into one intelligent
            workspace and help your team ship faster.
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

export default Developers;