import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Contact Us
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              amazing together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Have a question about NOVA? Our team is here to help you
            get the most out of your productivity workflow.
          </p>

        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="pb-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">

          {/* ================= LEFT SIDE ================= */}
          <div>

            <h2 className="text-3xl font-bold">
              Get in touch with us
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
              Whether you have a question about features, pricing or
              anything else, our team is ready to answer your questions.
            </p>


            {/* Contact Cards */}
            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Email us
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Our friendly team is here to help.
                  </p>

                  <p className="mt-2 text-sm text-violet-400">
                    hello@novaai.com
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <MessageCircle size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Live chat
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Chat with our support team.
                  </p>

                  <p className="mt-2 text-sm text-blue-400">
                    Available 24/7
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Visit our workspace.
                  </p>

                  <p className="mt-2 text-sm text-pink-400">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>

              </div>

            </div>


            {/* Extra Info */}
            <div className="mt-10 rounded-2xl border border-violet-500/20 bg-violet-500/[0.05] p-6">

              <h3 className="font-semibold text-violet-300">
                Why contact NOVA?
              </h3>

              <div className="mt-5 space-y-3">

                {[
                  "Get personalized product guidance",
                  "Find the right plan for your team",
                  "Learn how NOVA can improve your workflow",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-violet-400"
                    />

                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Send us a message
            </h2>

            <p className="mt-2 text-slate-400">
              Fill out the form and we will get back to you soon.
            </p>


            {/* Success Message */}
            {submitted && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">

                <CheckCircle2 size={22} />

                <p className="text-sm">
                  Your message has been sent successfully!
                </p>

              </div>
            )}


            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-white/10 focus:border-violet-500"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}

              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-white/10 focus:border-violet-500"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}

              </div>


              {/* Subject */}
              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 ${
                    errors.subject
                      ? "border-red-500"
                      : "border-white/10 focus:border-violet-500"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.subject}
                  </p>
                )}

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className={`w-full resize-none rounded-xl border bg-white/5 px-4 py-3 outline-none transition placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 ${
                    errors.message
                      ? "border-red-500"
                      : "border-white/10 focus:border-violet-500"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}

              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30"
              >
                Send Message

                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-white/10 bg-slate-900/50 py-20">

        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to get started with NOVA?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Explore our features and discover how NOVA can help your
            team work smarter every day.
          </p>

         <Link
         to="/features"
         className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-7 py-4 font-semibold transition hover:-translate-y-1"
         >
         Explore Features

         <ArrowRight
           size={18}
           className="transition group-hover:translate-x-1"
         />
        </Link>

        </div>

      </section>

    </main>
  );
};

export default Contact;