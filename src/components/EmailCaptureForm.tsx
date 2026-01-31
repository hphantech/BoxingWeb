"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

export default function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // TODO: Replace with actual API endpoint
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For now, just show success
      setStatus("success");
      setMessage("Thank you. You're in.");
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "loading" || status === "success"}
          className={cn(
            "w-full px-6 py-4",
            "bg-white/5 border border-white/10",
            "text-white placeholder:text-white/30",
            "focus:outline-none focus:border-white/30",
            "transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "font-light tracking-wide"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={cn(
            "w-full px-6 py-4",
            "bg-white text-black",
            "hover:bg-white/90",
            "transition-colors",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "font-medium tracking-wide uppercase text-sm"
          )}
        >
          {status === "loading" ? "Submitting..." : status === "success" ? "Submitted" : "Submit"}
        </button>
        {message && (
          <p
            className={cn(
              "text-sm text-center",
              status === "success" ? "text-white/80" : "text-red-400"
            )}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
