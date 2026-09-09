import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle2, FolderPlus, Sparkles, Rocket, Code2, TrendingUp, Building2, Quote, Star, Plus, Minus} from "lucide-react";
import { features } from "../data/features";
import productDashboard from "../assets/images/product-dashboard.png";
import heroDashboard from "../assets/images/hero-dashboard.png";
import { testimonials } from "../data/testimonials";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals getting started.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 3 projects",
      "Basic AI tools",
      "5 team members",
      "1GB storage",
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
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What is NOVA AI?",
    answer:
      "NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive tasks and collaborate efficiently from one workspace.",
  },
  {
    question: "Is NOVA free to use?",
    answer:
      "Yes. NOVA offers a free Starter plan that allows you to explore the platform and manage your projects before upgrading to a paid plan.",
  },
  {
    question: "Can I invite my team members?",
    answer:
      "Yes. You can invite your team members to collaborate on projects, assign tasks and manage workflows together.",
  },
  {
    question: "How does AI automation work?",
    answer:
      "NOVA AI helps automate repetitive tasks, organize workflows, prioritize work and provide smart productivity suggestions.",
  },
  {
    question: "Can I upgrade or cancel my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade or cancel your subscription whenever you need based on your team's requirements.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. NOVA uses modern security practices to help protect your workspace and keep your team's information secure.",
  },
];

function Home() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        
        {/* Background Effects */}
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              AI-Powered Productivity Platform
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Build Better.
              <br />

              <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Work Smarter.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0">
              NOVA is an AI-powered productivity platform that helps modern
              teams manage projects, automate workflows and collaborate more
              efficiently.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              
              {/* Get Started */}
              <Link
                to="/signup"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
              >
                Start For Free

                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Watch Demo */}
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-white/10">
                <Play size={18} fill="currentColor" />
                Watch Demo
              </button>

            </div>

            {/* Small Info */}
            <p className="mt-6 text-sm text-slate-500">
              No credit card required • Free forever plan available
            </p>
          </div>


          {/* RIGHT IMAGE */}
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 scale-90 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-violet-900/30">
              
              <img
                src={heroDashboard}
                alt="NOVA AI productivity dashboard"
                className="w-full rounded-xl transition duration-500 hover:scale-[1.02]"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-4 top-10 hidden rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur lg:block">
              <p className="text-xs text-slate-400">
                Productivity
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                +40%
              </p>

              <div className="mt-2 h-1.5 w-24 rounded-full bg-slate-700">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-5 right-5 hidden rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur lg:block">
              <p className="text-xs text-slate-400">
                AI Automation
              </p>

              <p className="mt-1 text-sm font-semibold text-green-400">
                ✓ Workflow Optimized
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TRUSTED BY SECTION ================= */}
<section className="border-y border-white/10 bg-slate-900/50">
  <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
    
    <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
      Trusted by innovative teams worldwide
    </p>

    <div className="mt-8 grid grid-cols-2 items-center gap-8 text-center sm:grid-cols-3 lg:grid-cols-6">
      
      <p className="text-lg font-bold text-slate-500 transition hover:text-white">
        Vertex
      </p>

      <p className="text-lg font-bold text-slate-500 transition hover:text-white">
        Lumina
      </p>

      <p className="text-lg font-bold text-slate-500 transition hover:text-white">
        Flowly
      </p>

      <p className="text-lg font-bold text-slate-500 transition hover:text-white">
        Nexora
      </p>

      <p className="text-lg font-bold text-slate-500 transition hover:text-white">
        Orbit
      </p>

      <p className="text-lg font-bold text-slate-500 transition hover:text-white">
        VISION
      </p>

    </div>
  </div>
</section>

  {/* ================= FEATURES SECTION ================= */}
<section className="relative overflow-hidden bg-slate-950 py-24">
  
  {/* Background Glow */}
  <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">
      
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        Powerful Features
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        Everything you need to
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          work smarter
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        NOVA brings powerful AI tools, automation and collaboration
        features together in one simple workspace.
      </p>

    </div>


    {/* Features Grid */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.05] hover:shadow-xl hover:shadow-violet-500/10"
          >
            
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
              <Icon size={26} />
            </div>


            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-white">
              {feature.title}
            </h3>


            {/* Description */}
            <p className="mt-3 leading-relaxed text-slate-400">
              {feature.description}
            </p>


            {/* Learn More */}
            <Link
              to="/features"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:gap-3 hover:text-violet-300"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>

          </div>
        );
      })}

    </div>


    {/* Bottom Button */}
    <div className="mt-12 text-center">

      <Link
        to="/features"
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-violet-500/50 hover:bg-violet-500/10"
      >
        Explore All Features

        <ArrowRight size={18} />
      </Link>

    </div>

  </div>
</section>

{/* ================= PRODUCT SECTION ================= */}
<section className="relative overflow-hidden bg-slate-900/50 py-24">
  
  {/* Background Glow */}
  <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">

    {/* LEFT SIDE - PRODUCT IMAGE */}
    <div className="relative order-2 lg:order-1">

      {/* Image Glow */}
      <div className="absolute inset-0 scale-90 rounded-full bg-violet-600/20 blur-[100px]" />

      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">

        <img
          src={productDashboard}
          alt="NOVA AI product dashboard"
          className="w-full rounded-xl"
        />

      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur lg:block">

        <p className="text-xs text-slate-400">
          Tasks Completed
        </p>

        <div className="mt-2 flex items-center gap-3">
          <p className="text-2xl font-bold text-white">
            12,480
          </p>

          <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
            +24%
          </span>
        </div>

      </div>

    </div>


    {/* RIGHT SIDE - CONTENT */}
    <div className="order-1 lg:order-2">

      {/* Small Heading */}
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        One Powerful Workspace
      </p>


      {/* Main Heading */}
      <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        Everything your team needs,
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          all in one place.
        </span>
      </h2>


      {/* Description */}
      <p className="mt-6 text-lg leading-relaxed text-slate-400">
        Stop switching between multiple tools. NOVA brings projects,
        tasks, automation and team collaboration together in one
        intelligent workspace.
      </p>


      {/* Benefits */}
      <div className="mt-8 space-y-5">

        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
            <CheckCircle2 size={17} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Manage Everything Easily
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Organize projects, tasks and workflows from one simple dashboard.
            </p>
          </div>

        </div>


        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
            <CheckCircle2 size={17} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Save Time with AI
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Automate repetitive work and let AI handle everyday tasks.
            </p>
          </div>

        </div>


        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
            <CheckCircle2 size={17} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Collaborate Without Limits
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Keep your entire team connected and productive from anywhere.
            </p>
          </div>

        </div>

      </div>


      {/* CTA Button */}
      <Link
        to="/features"
        className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
      >
        Explore the Product

        <ArrowRight
          size={18}
          className="transition duration-300 group-hover:translate-x-1"
        />
      </Link>

    </div>

  </div>
</section>
{/* ================= HOW IT WORKS SECTION ================= */}
<section className="relative overflow-hidden bg-slate-950 py-24">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        How It Works
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        Start working smarter in
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          three simple steps.
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        Get your team organized, automate your workflows and achieve more
        without the complexity.
      </p>
    </div>

    {/* Steps */}
    <div className="relative mt-16 grid gap-8 md:grid-cols-3">

      {/* STEP 1 */}
      <div className="group relative text-center">

        {/* Step Number */}
        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-7xl font-bold text-white/[0.03]">
          01
        </span>

        {/* Icon */}
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
          <FolderPlus size={32} />
        </div>

        <h3 className="mt-7 text-xl font-semibold text-white">
          Create Your Workspace
        </h3>

        <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate-400">
          Set up your workspace, invite your team and organize all your
          projects in one place.
        </p>

        {/* Step Number Badge */}
        <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-semibold text-violet-400">
          1
        </div>
      </div>


      {/* STEP 2 */}
      <div className="group relative text-center">

        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-7xl font-bold text-white/[0.03]">
          02
        </span>

        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
          <Sparkles size={32} />
        </div>

        <h3 className="mt-7 text-xl font-semibold text-white">
          Let AI Do the Work
        </h3>

        <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate-400">
          Use AI to automate repetitive tasks, organize workflows and help
          your team work more efficiently.
        </p>

        <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-400">
          2
        </div>
      </div>


      {/* STEP 3 */}
      <div className="group relative text-center">

        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-7xl font-bold text-white/[0.03]">
          03
        </span>

        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400 transition duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
          <Rocket size={32} />
        </div>

        <h3 className="mt-7 text-xl font-semibold text-white">
          Achieve More Together
        </h3>

        <p className="mx-auto mt-3 max-w-xs leading-relaxed text-slate-400">
          Track progress, collaborate with your team and achieve your goals
          faster than ever before.
        </p>

        <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-semibold text-violet-400">
          3
        </div>
      </div>

    </div>

  </div>
</section>
{/* ================= STATISTICS SECTION ================= */}
<section className="relative overflow-hidden border-y border-white/10 bg-slate-900/50 py-20">
  
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Statistics Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Stat 1 */}
      <div className="text-center">
        <h3 className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
          10K+
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-400">
          Active Users
        </p>
      </div>


      {/* Stat 2 */}
      <div className="border-white/10 text-center lg:border-x">
        <h3 className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
          98%
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-400">
          Customer Satisfaction
        </p>
      </div>


      {/* Stat 3 */}
      <div className="text-center">
        <h3 className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
          40%
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-400">
          More Productivity
        </p>
      </div>


      {/* Stat 4 */}
      <div className="border-white/10 text-center lg:border-l">
        <h3 className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
          24/7
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-400">
          AI Assistance
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================= SOLUTIONS SECTION ================= */}
<section className="relative overflow-hidden bg-slate-950 py-24">
  
  {/* Background Glow */}
  <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        Built For Every Team
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        One platform.
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Endless possibilities.
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        NOVA adapts to the way your team works, helping everyone stay
        organized, productive and focused.
      </p>

    </div>


    {/* Solutions Grid */}
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Startups */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.05]">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
          <Rocket size={26} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Startups
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Move faster, stay focused and scale your startup with powerful AI
          productivity tools.
        </p>

        <Link
          to="/solutions/startups"
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400"
        >
          Learn More

          <ArrowRight
            size={16}
            className="transition group-hover/link:translate-x-1"
          />
        </Link>

      </div>


      {/* Developers */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.05]">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
          <Code2 size={26} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Development Teams
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Plan projects, manage sprints and keep your development team
          perfectly aligned.
        </p>

        <Link
          to="/solutions/developers"
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400"
        >
          Learn More

          <ArrowRight
            size={16}
            className="transition group-hover/link:translate-x-1"
          />
        </Link>

      </div>


      {/* Marketing */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.05]">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition duration-300 group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white">
          <TrendingUp size={26} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Marketing Teams
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Organize campaigns, automate workflows and collaborate on creative
          ideas faster.
        </p>

        <Link
          to="/solutions/marketing"
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400"
        >
          Learn More

          <ArrowRight
            size={16}
            className="transition group-hover/link:translate-x-1"
          />
        </Link>

      </div>


      {/* Enterprise */}
      <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-blue-500/[0.05]">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
          <Building2 size={26} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Enterprise
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Give large teams the security, control and scalability they need
          to grow.
        </p>

        <Link
          to="/solutions"
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-400"
        >
          Learn More

          <ArrowRight
            size={16}
            className="transition group-hover/link:translate-x-1"
          />
        </Link>

      </div>

    </div>


    {/* Bottom CTA */}
    <div className="mt-12 text-center">

      <Link
        to="/solutions"
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-violet-500/10"
      >
        Explore All Solutions

        <ArrowRight size={18} />
      </Link>

    </div>

  </div>
</section>
{/* ================= TESTIMONIALS SECTION ================= */}
<section className="relative overflow-hidden bg-slate-900/50 py-24">
  
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        Loved By Teams
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        What our customers
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          are saying.
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        Thousands of teams are already using NOVA to work smarter,
        collaborate better and achieve more.
      </p>

    </div>


    {/* Testimonials Grid */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/[0.05] hover:shadow-xl hover:shadow-violet-500/10"
        >

          {/* Quote Icon */}
          <div className="absolute right-6 top-6 text-violet-500/20 transition duration-300 group-hover:text-violet-500/40">
            <Quote size={42} />
          </div>


          {/* Stars */}
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>


          {/* Testimonial Message */}
          <p className="mt-6 min-h-[120px] leading-relaxed text-slate-300">
            "{testimonial.message}"
          </p>


          {/* Divider */}
          <div className="my-6 border-t border-white/10" />


          {/* User */}
          <div className="flex items-center gap-4">

            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-violet-500/20"
            />

            <div>
              <h3 className="font-semibold text-white">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
{/* ================= PRICING SECTION ================= */}
<section className="relative overflow-hidden bg-slate-950 py-24">
  <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        Simple Pricing
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        Choose the plan that
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          works for you.
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        Start for free and upgrade whenever your team needs more power.
      </p>

    </div>


    {/* Monthly / Yearly Toggle */}
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


    {/* Pricing Cards */}
    <div className="mt-16 grid gap-8 lg:grid-cols-3">

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

            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-1.5 text-xs font-semibold text-white">
                MOST POPULAR
              </div>
            )}


            {/* Plan Name */}
            <h3 className="text-2xl font-bold text-white">
              {plan.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {plan.description}
            </p>


            {/* Price */}
            <div className="mt-8 flex items-end">

              <span className="text-5xl font-bold text-white">
                ${price}
              </span>

              <span className="mb-1 ml-2 text-slate-400">
                {price === 0
                  ? "/ forever"
                  : isYearly
                  ? "/ month"
                  : "/ month"}
              </span>

            </div>

            {isYearly && price > 0 && (
              <p className="mt-2 text-xs text-green-400">
                Billed annually
              </p>
            )}


            {/* Button */}
            <Link
              to="/signup"
              className={`mt-8 block rounded-xl px-5 py-3 text-center font-semibold transition duration-300 ${
                plan.popular
                  ? "bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:shadow-lg hover:shadow-violet-500/30"
                  : "border border-white/10 bg-white/5 text-white hover:border-violet-500/50 hover:bg-violet-500/10"
              }`}
            >
              {price === 0 ? "Start for Free" : "Get Started"}
            </Link>


            {/* Divider */}
            <div className="my-8 border-t border-white/10" />


            {/* Features */}
            <div className="space-y-4">

              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    <CheckCircle2 size={14} />
                  </div>

                  <span className="text-sm text-slate-300">
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
{/* ================= FAQ SECTION ================= */}
<section className="relative overflow-hidden bg-slate-900/50 py-24">
  {/* Background Glow */}
  <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />

  <div className="relative mx-auto max-w-4xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        FAQ
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        Frequently asked
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          questions.
        </span>
      </h2>

      <p className="mt-5 text-lg leading-relaxed text-slate-400">
        Everything you need to know about NOVA AI and how it can help
        your team work smarter.
      </p>

    </div>

    {/* FAQ List */}
    <div className="mt-14 space-y-4">

      {faqs.map((faq, index) => {
        const isOpen = openFAQ === index;

        return (
          <div
            key={index}
            className={`overflow-hidden rounded-xl border transition duration-300 ${
              isOpen
                ? "border-violet-500/40 bg-violet-500/[0.05]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >

            {/* Question */}
            <button
              onClick={() =>
                setOpenFAQ(isOpen ? null : index)
              }
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-white sm:text-lg">
                {faq.question}
              </span>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition duration-300 ${
                  isOpen
                    ? "bg-violet-500 text-white"
                    : "bg-white/5 text-slate-400"
                }`}
              >
                {isOpen ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </div>

          </div>
        );
      })}

    </div>

  </div>
</section>
{/* ================= FINAL CTA SECTION ================= */}
<section className="relative overflow-hidden bg-slate-950 py-24">
  
  {/* Background Glow */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

  <div className="relative mx-auto max-w-5xl px-5 lg:px-8">

    <div className="overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 via-slate-900 to-blue-600/20 px-6 py-16 text-center sm:px-12 sm:py-20">

      {/* Small Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        <Sparkles size={16} />
        Start Your Journey Today
      </div>

      {/* Heading */}
      <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Ready to build better
        <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
          and work smarter?
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
        Join thousands of modern teams using NOVA AI to manage projects,
        automate workflows and achieve more every day.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

        {/* Get Started */}
        <Link
          to="/signup"
          className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
        >
          Start For Free

          <ArrowRight
            size={18}
            className="transition duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* Contact / Demo */}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white/10"
        >
          <Play size={18} />
          Book a Demo
        </Link>

      </div>

      {/* Bottom Text */}
      <p className="mt-7 text-sm text-slate-500">
        ✦ Free forever plan &nbsp; • &nbsp; ✦ No credit card required
      </p>

    </div>

  </div>
</section>
    </>
  );
}

export default Home;