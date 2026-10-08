"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Check, Sparkles, Send, Bot, Globe, Zap } from "lucide-react";
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

    const formData = new FormData();
    formData.append("access_key", "94fc2fd5-4066-49f4-b618-58e6512698a8");
    formData.append("subject", `[DISCOVERY CALL] ${name} from ${businessName || "New Client"}`);
    formData.append("from_name", name);
    formData.append("email", email);
    formData.append("brand_name", businessName || "N/A");
    formData.append("scheduled_date", selectedDay);
    formData.append("scheduled_time", selectedTime);
    formData.append("consultation_focus", selectedTopic);
    formData.append("message", `Focus: ${selectedTopic}\nRequested Time: ${selectedDay} at ${selectedTime}\nBottleneck / Notes: ${notes || "None provided"}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
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
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again or email contact@valorewebdesign.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="scroll-mt-24 bg-card border-y border-border transition-colors duration-300 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-[1080px] px-6 apple-section-spacing relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="apple-badge mb-4">
            <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
            Direct Calendar & Spec
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
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-sans text-base leading-relaxed">
            Schedule a 15-minute consultation directly with Pratham Verma to discuss your business bottlenecks and map out a tailored AI solution.
          </p>
        </div>

        {/* Embedded Interactive Booking Terminal */}
        <div className="apple-bento-card border border-white/[0.08] p-6 sm:p-10 bg-background/90 backdrop-blur-2xl">
          <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-12">
            {/* Left Column: Interactive Slot Selection */}
            <div className="lg:col-span-5 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-border pb-8 lg:pb-0 lg:pr-8">
              <div>
                <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest block mb-1">
                  Step 1
                </span>
                <h3 className="text-foreground font-bold text-sm uppercase tracking-wider flex items-center gap-2">
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
                          ? "bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-lg shadow-[#D4AF37]/10"
                          : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-white/20"
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
                <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest block mb-1">
                  Step 2
                </span>
                <h3 className="text-foreground font-bold text-sm uppercase tracking-wider flex items-center gap-2 mb-3">
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
                            ? "bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-md"
                            : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-white/20"
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
                <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest block mb-1">
                  Step 3
                </span>
                <h3 className="text-foreground font-bold text-sm uppercase tracking-wider mb-2.5">
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
                        className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer border ${
                          isSelected
                            ? "bg-card border-[#D4AF37] text-[#D4AF37]"
                            : "bg-card/50 border-border text-muted-foreground hover:text-foreground hover:bg-card"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5" />
                          {topic.label}
                        </span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-[#D4AF37]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Contact Details & Bottleneck */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">
                    Final Step
                  </span>
                  <h3 className="text-foreground font-sans font-bold text-base uppercase tracking-tight">
                    Your Information & Objectives
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    No salespeople. You will speak directly with me, your lead AI consultant.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Your Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-xl bg-card border border-border px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none transition-all"
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Work Email <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@yourcompany.com"
                        className="w-full rounded-xl bg-card border border-border px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Business Name or Website
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Company or Current URL"
                        className="w-full rounded-xl bg-card border border-border px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      What bottleneck or digital problem are you facing? <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell me what manual tasks eat up your team's time, why your current website isn't converting, or what you want AI to automate..."
                      className="w-full rounded-xl bg-card border border-border px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/30 focus:border-[#D4AF37] focus:outline-none resize-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Selection Summary Pill */}
              <div className="p-3.5 rounded-xl bg-card/60 border border-border/80 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                    Scheduled Window:
                  </span>
                  <span className="font-semibold text-foreground">
                    {selectedDay} at {selectedTime}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                    Duration:
                  </span>
                  <span className="font-semibold text-[#D4AF37]">
                    15 Min Discovery Call
                  </span>
                </div>
              </div>

              {error && (
                <p className="text-xs text-red-400 font-semibold text-center">
                  {error}
                </p>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-full bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#D4AF37]/10 active:scale-[0.98] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Confirming Reservation...
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    Confirm Discovery Call
                  </>
                )}
              </button>

              <p className="text-[10px] text-muted-foreground/70 text-center font-mono">
                ✓ No obligation &bull; Direct Google Meet invitation &bull; Tailored project discussion
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
