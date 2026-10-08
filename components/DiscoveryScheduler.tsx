"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Check, Sparkles, Send, Bot, Globe, Zap, ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

// Generate next 5 business days
const getUpcomingBusinessDays = () => {
  const days: { label: string; dateStr: string; dayName: string; dayNum: number }[] = [];
  const curr = new Date();
  
  while (days.length < 5) {
    curr.setDate(curr.getDate() + 1);
    const dayOfWeek = curr.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Monday-Friday
      const dayName = curr.toLocaleDateString("en-US", { weekday: "short" });
      const monthName = curr.toLocaleDateString("en-US", { month: "short" });
      const dayNum = curr.getDate();
      days.push({
        label: `${dayName}, ${monthName} ${dayNum}`,
        dateStr: curr.toISOString().split("T")[0],
        dayName,
        dayNum,
      });
    }
  }
  return days;
};

const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
];

const CONSULTATION_TOPICS = [
  { id: "ai-bot", label: "24/7 AI Customer Chatbot", icon: Bot },
  { id: "lead-automation", label: "Automated Lead Capture", icon: Zap },
  { id: "custom-web", label: "Custom High-Speed Website", icon: Globe },
  { id: "full-consulting", label: "Full AI Consulting & Web Build", icon: Sparkles },
];

export default function DiscoveryScheduler({ id = "book-discovery" }: { id?: string }) {
  const router = useRouter();
  const businessDays = getUpcomingBusinessDays();

  const [selectedDay, setSelectedDay] = useState(businessDays[0]?.label || "");
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [selectedTopic, setSelectedTopic] = useState(CONSULTATION_TOPICS[0].label);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website: businessName || "N/A",
          projectType: `Discovery Call: ${selectedTopic}`,
          message: `Requested Time: ${selectedDay} at ${selectedTime}\nConsultation Focus: ${selectedTopic}\nClient Notes: ${notes || "None provided"}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        const queryParams = new URLSearchParams({
          name: name || "Partner",
          date: selectedDay,
          time: selectedTime,
          topic: selectedTopic,
          type: "consultation",
        });
        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
        setError(data.message || "Failed to submit. Please try again.");
      }
    } catch {
      setError("Network error. Please try again or email contact@valorewebdesign.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="scroll-mt-24 bg-card/40 border-y border-border transition-colors duration-300 relative overflow-hidden">
      <div className="mx-auto max-w-[1080px] px-6 py-24 sm:py-32 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full border border-border bg-card">
            <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Live Mockup & Discovery
            </span>
          </div>
          <h2
            className="text-foreground font-sans font-bold uppercase tracking-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: "1.08",
            }}
          >
            Book a Discovery Call<span className="text-[#D4AF37]">.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
            Schedule a 15-minute consultation directly with Pratham Verma to review your live interactive mockup and discuss transparent project investment.
          </p>
        </div>

        {/* Embedded Interactive Booking Terminal */}
        <div className="rounded-3xl border border-border p-6 sm:p-10 bg-card shadow-2xl">
          <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-12">
            {/* Left Column: Interactive Slot Selection */}
            <div className="lg:col-span-5 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-8">
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                  Step 01
                </span>
                <h3 className="text-foreground font-sans font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#D4AF37]" />
                  Select Preferred Day
                </h3>
              </div>

              {/* Day selection pills */}
              <div className="grid grid-cols-5 gap-2">
                {businessDays.map((day) => {
                  const isSelected = selectedDay === day.label;
                  return (
                    <button
                      type="button"
                      key={day.dateStr}
                      onClick={() => setSelectedDay(day.label)}
                      className={`p-2.5 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-foreground text-background border-foreground font-bold shadow-md"
                          : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      <span className="text-[9px] uppercase tracking-wider font-semibold">
                        {day.dayName}
                      </span>
                      <span className="text-base font-bold mt-0.5">
                        {day.dayNum}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                  Step 02
                </span>
                <h3 className="text-foreground font-sans font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                  Select 15-Minute Slot
                </h3>

                {/* Time slot grid */}
                <div className="grid grid-cols-2 gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer border text-center ${
                          isSelected
                            ? "bg-foreground text-background border-foreground font-bold shadow-sm"
                            : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Focus Area Pill Selector */}
              <div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                  Step 03
                </span>
                <h3 className="text-foreground font-sans font-bold text-sm uppercase tracking-wider mb-2.5">
                  Consultation Focus
                </h3>
                <div className="space-y-1.5">
                  {CONSULTATION_TOPICS.map((topic) => {
                    const Icon = topic.icon;
                    const isSelected = selectedTopic === topic.label;
                    return (
                      <button
                        type="button"
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.label)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-foreground/5 border-foreground text-foreground shadow-sm"
                            : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className={`h-3.5 w-3.5 ${isSelected ? "text-foreground" : "text-muted-foreground"}`} />
                          {topic.label}
                        </span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-foreground" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Details & Bottleneck */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                    Step 04
                  </span>
                  <h3 className="text-foreground font-sans font-bold text-base uppercase tracking-tight">
                    Your Information & Objectives
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-sans">
                    Zero salespeople. You speak directly with Pratham Verma, lead architect.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl bg-background border border-border px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full rounded-xl bg-background border border-border px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Business Name or Website
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Acme Corp or current URL"
                        className="w-full rounded-xl bg-background border border-border px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      What bottleneck or digital goal are you addressing? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us what manual bottlenecks eat up your team's time, why your current platform is falling short, or your target launch date..."
                      className="w-full rounded-xl bg-background border border-border p-3 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-foreground focus:outline-none resize-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Selection Summary Pill & Submit Button */}
              <div className="mt-6 space-y-4 pt-4 border-t border-border">
                <div className="p-3 rounded-xl bg-background border border-border flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[9.5px] text-muted-foreground uppercase tracking-wider block">
                      Scheduled Window:
                    </span>
                    <span className="font-semibold text-foreground text-[11px]">
                      {selectedDay} at {selectedTime}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9.5px] text-muted-foreground uppercase tracking-wider block">
                      Format:
                    </span>
                    <span className="font-semibold text-foreground text-[11px]">
                      15-Min Live Mockup Call
                    </span>
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-red-500 font-sans text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:opacity-90 active:scale-[0.98] transition-all shadow-md disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4" />
                      <span>Scheduling Call...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm 15-Minute Mockup Session</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-muted-foreground font-mono text-[9px] uppercase tracking-wider">
                  <ShieldCheck className="h-3 w-3 text-[#D4AF37]" />
                  <span>100% Confidential &bull; Direct Consultation With Pratham Verma</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
