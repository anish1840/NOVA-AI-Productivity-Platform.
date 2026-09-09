import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, Sparkles } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 text-white">

      {/* Background Effects */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">

        {/* Logo */}
        <Link
          to="/"
          className="mb-12 inline-flex items-center gap-2 text-xl font-bold"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
            <Sparkles size={20} />
          </div>

          NOVA AI
        </Link>

        {/* 404 */}
        <div className="relative">

          <p className="bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-[100px] font-bold leading-none text-transparent sm:text-[160px]">
            404
          </p>

        </div>

        {/* Content */}
        <h1 className="mt-8 text-3xl font-bold sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
          Oops! The page you are looking for doesn't exist or may have
          been moved to another location.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
          >
            <Home size={19} />

            Back to Home
          </Link>

          <Link
            to="/features"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold transition hover:border-violet-500/40 hover:bg-white/10"
          >
            <Search size={19} />

            Explore NOVA
          </Link>

        </div>

        {/* Go Back */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-violet-400"
        >
          <ArrowLeft size={17} />

          Go back to previous page
        </button>

      </div>

    </main>
  );
};

export default NotFound;