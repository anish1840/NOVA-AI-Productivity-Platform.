import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-slate-900 lg:flex lg:flex-col lg:justify-between lg:p-12">

          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

          {/* Logo */}
          <Link
            to="/"
            className="relative flex items-center gap-2 text-xl font-bold"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
              <Sparkles size={20} />
            </div>

            NOVA AI
          </Link>

          {/* Content */}
          <div className="relative max-w-lg">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Welcome Back
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight">
              Continue building.
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                Continue growing.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Sign in to your NOVA AI workspace and continue managing
              projects, automating workflows and collaborating with
              your team.
            </p>

            <div className="mt-10 space-y-4">

              {[
                "Access your projects from one workspace",
                "Stay connected with your team",
                "Continue your AI-powered workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2
                    size={20}
                    className="text-violet-400"
                  />

                  {item}
                </div>
              ))}

            </div>

          </div>

          <p className="relative text-sm text-slate-500">
            © 2026 NOVA AI
          </p>

        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="flex items-center justify-center px-5 py-12 sm:px-8">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <Link
              to="/"
              className="mb-12 flex items-center gap-2 text-xl font-bold lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500">
                <Sparkles size={20} />
              </div>

              NOVA AI
            </Link>


            {/* Heading */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Sign In
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Welcome back
              </h2>

              <p className="mt-3 text-slate-400">
                Enter your details to access your workspace.
              </p>

            </div>


            {/* Success Message */}
            {submitted && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">

                <CheckCircle2 size={22} />

                <p className="text-sm">
                  Login successful! Welcome back to NOVA AI.
                </p>

              </div>
            )}


            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-white/5 py-3 pl-12 pr-4 outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 ${
                      errors.email
                        ? "border-red-500"
                        : "border-white/10"
                    }`}
                  />

                </div>

                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}

              </div>


              {/* Password */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-violet-400 transition hover:text-violet-300"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={`w-full rounded-xl border bg-white/5 py-3 pl-12 pr-12 outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 ${
                      errors.password
                        ? "border-red-500"
                        : "border-white/10"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.password}
                  </p>
                )}

              </div>


              {/* Remember Me */}
              <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-violet-500"
                />

                Remember me for 30 days

              </label>


              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
              >
                Sign In

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </button>

            </form>


            {/* Signup */}
            <p className="mt-8 text-center text-sm text-slate-400">
              Don't have an account?{" "}

              <Link
                to="/signup"
                className="font-medium text-violet-400 transition hover:text-violet-300"
              >
                Create account
              </Link>
            </p>


            {/* Demo Note */}
            <p className="mt-6 text-center text-xs text-slate-500">
              This is a frontend demo. No real authentication is required.
            </p>

          </div>

        </div>

      </div>
    </main>
  );
};

export default Login;