"use client";

import { toast } from "sonner";
import { useState, Suspense, lazy } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Particles from "@/components/ui/particles";
import Header from "@/components/header";

// Lazy load components that are below the fold
const HowItWorks = lazy(() => import('@/components/how-it-works'));
const Logos = lazy(() => import('@/components/logos'));
const Pricing = lazy(() => import('@/components/pricing'));
const Footer = lazy(() => import('@/components/footer'));

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentApp, setCurrentApp] = useState("");
  const [usageType, setUsageType] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAppChange = (value: string) => {
    setCurrentApp(value);
  };

  const handleUsageChange = (value: string) => {
    setUsageType(value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email || !currentApp || !usageType) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        const mailResponse = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        });

        if (!mailResponse.ok) {
          const error = await mailResponse.json();
          reject(error.message || "Failed to send email");
          return;
        }

        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name, 
            email,
            currentApp,
            usageType 
          }),
        });

        if (!notionResponse.ok) {
          const error = await notionResponse.json();
          reject(error.message || "Failed to save to Notion");
          return;
        }

        resolve({ name });
      } catch (error: unknown) {
        reject(error instanceof Error ? error.message : 'Unknown error occurred');
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        setCurrentApp("");
        setUsageType("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* <Header /> */}

        <CTA />

        <Form
          name={name}
          email={email}
          currentApp={currentApp}
          usageType={usageType}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleAppChange={handleAppChange}
          handleUsageChange={handleUsageChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

        <Suspense fallback={<div className="h-96 w-full animate-pulse bg-zinc-800/50 rounded-lg" />}>
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<div className="h-64 w-full animate-pulse bg-zinc-800/50 rounded-lg" />}>
          <Logos />
        </Suspense>

        <Suspense fallback={<div className="h-64 w-full animate-pulse bg-zinc-800/50 rounded-lg" />}>
          <Pricing />
        </Suspense>
      </section>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Particles
        quantityDesktop={200}
        quantityMobile={50}
        ease={80}
        color={"#F7FF9B"}
        refresh={false}
      />
    </main>
  );
}
