import { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";
import { Switch } from "@/components/ui/switch";

const plans = {
  free: {
    name: "Free",
    price: {
      monthly: "$0",
      yearly: "$0",
    },
    description: "Free, it is free free",
    features: [
      "10 screenshots per month",
      "Basic AI processing",
      "Integration with 1 todo app",
      "7-day history",
    ],
  },
  premium: {
    name: "Premium",
    price: {
      monthly: "$3",
      yearly: "$29",
    },
    description: "1 cup of coffee per month",
    features: [
      "500 screenshots per month",
      "Advanced AI processing",
      "Integration with all todo apps",
      "30-day history",
      "Priority support",
      "Custom templates",
    ],
  },
  advance: {
    name: "Advance",
    price: {
      monthly: "$15",
      yearly: "$144",
    },
    description: "3 cups of coffee per month",
    features: [
      "Unlimited screenshots",
      "Priority AI processing",
      "Integration with all todo apps",
      "Unlimited history",
      "24/7 Priority support",
      "Custom templates",
      "API access",
      "Team collaboration",
    ],
  },
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <motion.div
      className="w-full max-w-6xl px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <TextBlur
          className="text-3xl font-medium tracking-tighter sm:text-4xl"
          text="Simple, transparent pricing"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center items-center gap-4 mb-8">
        <span className={`text-sm ${!isYearly ? "text-white" : "text-muted-foreground"}`}>Monthly</span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <span className={`text-sm ${isYearly ? "text-white" : "text-muted-foreground"}`}>
          Yearly <span className="text-yellow-200">(Save 20%)</span>
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(plans).map(([key, plan]) => (
          <motion.div
            key={key}
            variants={itemVariants}
            className={`flex flex-col p-6 rounded-lg border ${
              key === "premium" ? "border-yellow-200/50 bg-yellow-200/5" : "border-zinc-800 bg-zinc-900/50"
            }`}
          >
            <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">
                {isYearly ? plan.price.yearly : plan.price.monthly}
              </span>
              {key !== "free" && <span className="text-muted-foreground">/month</span>}
            </div>
            <p className="text-muted-foreground mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto rounded-md px-4 py-2 text-sm font-medium transition-colors
                ${
                  key === "premium"
                    ? "bg-yellow-200 text-black hover:bg-yellow-300"
                    : "border border-yellow-200/20 hover:bg-yellow-200/10"
                }
              `}
            >
              {key === "free" ? "Get Started" : "Subscribe Now"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 