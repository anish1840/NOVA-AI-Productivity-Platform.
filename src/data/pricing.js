import {
  Check,
  Sparkles,
  Building2,
} from "lucide-react";

export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for individuals and small teams.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Check,
    popular: false,

    features: [
      "3 Projects",
      "Basic AI Tools",
      "Up to 5 Team Members",
      "Basic Analytics",
    ],

    buttonText: "Get Started",
  },

  {
    id: 2,
    name: "Pro",
    description: "For growing teams that need more power.",
    monthlyPrice: 799,
    yearlyPrice: 639,
    icon: Sparkles,
    popular: true,

    features: [
      "Unlimited Projects",
      "Advanced AI Tools",
      "Unlimited Team Members",
      "Smart Automation",
      "Advanced Analytics",
      "Priority Support",
    ],

    buttonText: "Start Free Trial",
  },

  {
    id: 3,
    name: "Enterprise",
    description: "For large organizations with advanced needs.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    icon: Building2,
    popular: false,

    features: [
      "Everything in Pro",
      "Advanced Security",
      "Custom Integrations",
      "Dedicated Support",
      "Team Management",
      "Custom Solutions",
    ],

    buttonText: "Contact Sales",
  },
];