import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Users,
  BarChart3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import productDashboard from "../assets/images/product-dashboard.png";

const features = [
  {
    icon: Workflow,
    title: "Smart Project Management",
    description:
      "Plan, organize and manage all your projects from one powerful workspace.",
  },
  {
    icon: Sparkles,
    title: "AI Automation",
    description:
      "Automate repetitive tasks and let NOVA AI handle your everyday workflows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Keep your team connected with shared workspaces and real-time updates.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Track performance and understand your team's productivity with insights.",
  },
  {
    icon: Zap,
    title: "Fast Workflows",
    description:
      "Create efficient workflows that help your team save time every day.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Keep your projects and team data protected with modern security.",
  },
];

const Features = () => {
  return (
    <main className="bg-slate-950 pt-24 text-white">
      
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Powerful Features
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Everything you need to
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              work smarter.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            NOVA combines AI, project management and collaboration
            tools into one powerful workspace for modern teams.
          </p>

          <Link
            to="/pricing"
            className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
          >
            Explore Pricing

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>


      {/* FEATURES GRID */}
      <section className="py-24">
        
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.05]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h2 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h2>

                  <p className="mt-3 leading-relaxed text-slate-400">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* PRODUCT SHOWCASE */}
      <section className="border-y border-white/10 bg-slate-900/50 py-24">
        
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Built For Productivity
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              One workspace.
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Unlimited possibilities.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Bring your projects, team and workflows together in one
              intelligent workspace designed to help you focus on what
              matters most.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Manage projects from one dashboard",
                "Automate repetitive workflows with AI",
                "Collaborate with your team in real time",
                "Track productivity with smart insights",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-violet-400"
                  />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* Image */}
          <div className="relative">

            <div className="absolute inset-0 scale-90 rounded-full bg-blue-600/15 blur-[100px]" />

            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">

              <img
                src={productDashboard}
                alt="NOVA productivity dashboard"
                className="w-full rounded-xl"
              />

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24">

        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-slate-900 to-blue-600/20 px-6 py-16 text-center sm:px-12">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Ready to work smarter?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Start using NOVA today and give your team the tools
              they need to achieve more.
            </p>

            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Features;