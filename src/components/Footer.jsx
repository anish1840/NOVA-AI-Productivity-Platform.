import { Link } from "react-router-dom";
import { ArrowUpRight} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

import logo from "../assets/images/logo.png";

const Footer = () => {
  const productLinks = [
    { name: "Features", path: "/features" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Integrations", path: "/integrations" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const resourceLinks = [
    { name: "Help Center", path: "/help" },
    { name: "Documentation", path: "/docs" },
    { name: "Community", path: "/community" },
    { name: "Status", path: "/status" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        
        {/* Footer Top */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >
              <img
                src={logo}
                alt="NOVA AI"
                className="h-20 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-relaxed text-slate-400">
              NOVA is an AI-powered productivity platform that helps
              modern teams manage projects, automate workflows and
              collaborate smarter.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:-translate-y-1 hover:border-violet-500/50 hover:text-violet-400"
              >
                <FaInstagram size={18} />
              </a>

            </div>

          </div>


          {/* Product Links */}
          <div>

            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">

              {productLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-violet-400"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Company Links */}
          <div>

            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              {companyLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-violet-400"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* Resources Links */}
          <div>

            <h3 className="font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">

              {resourceLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-violet-400"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>

                </li>
              ))}

            </ul>

          </div>

        </div>


        {/* Divider */}
        <div className="my-12 border-t border-white/10" />


        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 NOVA AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/privacy"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;