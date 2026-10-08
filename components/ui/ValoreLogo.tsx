"use client";

interface ValoreLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  withBorder?: boolean;
}

export default function ValoreLogo({
  className = "",
  iconOnly = false,
  size = "md",
  withBorder = false,
}: ValoreLogoProps) {
  const dimensions = {
    sm: { icon: "h-5 w-5 sm:h-6 sm:w-6", text: "text-[11px] sm:text-xs", sub: "text-[6.5px] sm:text-[7.5px]" },
    md: { icon: "h-9 w-9", text: "text-lg", sub: "text-[9px]" },
    lg: { icon: "h-14 w-14 sm:h-16 sm:w-16", text: "text-xl sm:text-2xl", sub: "text-[10px] sm:text-[11px]" },
  };

  const current = dimensions[size];

  const logoContent = (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none`}>
      {/* Sleek V Monogram SVG */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${current.icon} flex-shrink-0 transition-transform duration-500 hover:scale-105`}
      >
        {/* Left diagonal leg in Gold gradient */}
        <path
          d="M22 18 L46 80 H56 L32 18 Z"
          fill="url(#logoGoldGrad)"
        />
        {/* Right diagonal leg in Silver/Dark gradient */}
        <path
          d="M78 18 L54 80 H44 L68 18 Z"
          fill="url(#logoThemeGrad)"
        />
        <defs>
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6E7B6" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA7C11" />
          </linearGradient>
          <linearGradient id="logoThemeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--logo-silver-start)" />
            <stop offset="50%" stopColor="var(--logo-silver-mid)" />
            <stop offset="100%" stopColor="var(--logo-silver-end)" />
          </linearGradient>
        </defs>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col items-start leading-none justify-center">
          {/* Main Brand Text */}
          <span
            className={`font-sans font-bold tracking-[0.25em] transition-colors duration-300 text-foreground ${current.text}`}
          >
            VALORE
          </span>
          {/* Sub-Branding */}
          <span
            className={`font-sans tracking-[0.14em] uppercase mt-1.5 font-medium transition-colors duration-300 text-[var(--logo-subtext)] ${current.sub}`}
            style={{ color: "var(--logo-subtext)" }}
          >
            DIGITAL IDENTITY FIRM & AI CONSULTING
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {logoContent}
    </div>
  );
}
