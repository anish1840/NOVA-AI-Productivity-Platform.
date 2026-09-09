import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Heart,
  CheckCircle2,
  Users,
} from "lucide-react";

import aboutTeam from "../assets/images/about-team.png";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To help modern teams eliminate busy work and focus on meaningful work that drives real impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We believe technology and AI should make work simpler, faster and more enjoyable for everyone.",
  },
  {
    icon: Heart,
    title: "People Matter",
    description:
      "We build products with people at the center and create tools that help teams work better together.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">
      
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-24">
        
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Content */}
            <div>
              
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                About NOVA
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Building the future
                <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  of productive work.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                NOVA is an AI-powered productivity platform built to help
                modern teams manage projects, automate repetitive tasks
                and collaborate more efficiently.
              </p>

              <p className="mt-4 leading-relaxed text-slate-400">
                We believe great work happens when teams spend less time
                managing tools and more time building ideas that matter.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
              >
                Get in Touch

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

            </div>

            {/* Image */}
            <div className="relative">
              
              <div className="absolute inset-0 scale-90 rounded-full bg-blue-600/15 blur-[100px]" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
                <img
                  src={aboutTeam}
                  alt="NOVA AI team collaborating"
                  className="w-full rounded-2xl object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STORY ================= */}
      <section className="border-y border-white/10 bg-slate-900/50 py-24">
        
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Our Story
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Work should feel
            <span className="block text-violet-400">
              simpler, not harder.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-400">
            Modern teams use dozens of tools every day. Tasks get lost,
            communication becomes fragmented and repetitive work takes
            valuable time away from creativity.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            NOVA was created to bring projects, workflows and collaboration
            into one intelligent workspace powered by AI.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Our goal is simple: help teams spend less time managing work
            and more time doing their best work.
          </p>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="py-24">
        
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              What We Believe
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Our values guide
              <span className="block text-violet-400">
                everything we build.
              </span>
            </h2>

          </div>


          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.05]"
                >
                  
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-400">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= WHY NOVA ================= */}
      <section className="border-y border-white/10 bg-slate-900/50 py-24">
        
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Why NOVA
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Built for teams that
              <span className="block text-violet-400">
                want to move faster.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              NOVA gives your team a simple and powerful workspace where
              ideas become plans and plans become results.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "One workspace for your entire team",
                "AI-powered productivity tools",
                "Simple and intuitive workflows",
                "Built to scale with your business",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-violet-400"
                  />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* Stats Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-violet-500/10 p-6">
                <Users className="text-violet-400" size={28} />
                <h3 className="mt-5 text-3xl font-bold">
                  10K+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Active Users
                </p>
              </div>

              <div className="rounded-2xl bg-blue-500/10 p-6">
                <Target className="text-blue-400" size={28} />
                <h3 className="mt-5 text-3xl font-bold">
                  99.9%
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Platform Uptime
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <Lightbulb className="text-yellow-400" size={28} />
                <h3 className="mt-5 text-3xl font-bold">
                  50+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Countries
                </p>
              </div>

              <div className="rounded-2xl bg-violet-500/10 p-6">
                <Heart className="text-pink-400" size={28} />
                <h3 className="mt-5 text-3xl font-bold">
                  24/7
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Support
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24">

        <div className="mx-auto max-w-5xl px-5 lg:px-8">

          <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-slate-900 to-blue-600/20 px-6 py-16 text-center sm:px-12">

            <h2 className="text-3xl font-bold sm:text-5xl">
              Join us in building
              <span className="block text-violet-400">
                better ways to work.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Discover how NOVA can help your team stay focused,
              organized and productive.
            </p>

            <Link
              to="/signup"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Start For Free

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

export default About;