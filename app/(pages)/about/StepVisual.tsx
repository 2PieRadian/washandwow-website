"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarDays, Droplets, Package, Smartphone } from "lucide-react";

type Variant = "schedule" | "care" | "deliver";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function InteractiveStage({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduced) return;
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      setTilt({
        rx: (0.5 - y) * 13,
        ry: (x - 0.5) * 15,
      });
    },
    [reduced],
  );

  const reset = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  const endPress = useCallback(() => setPressed(false), []);

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label={label}
      tabIndex={0}
      onPointerMove={handleMove}
      onPointerDown={() => setPressed(true)}
      onPointerUp={endPress}
      onPointerCancel={endPress}
      onPointerLeave={(e) => {
        reset();
        endPress();
      }}
      onBlur={() => {
        reset();
        endPress();
      }}
      className={
        `group relative touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-orange-services/40 focus-visible:ring-offset-2 motion-safe:cursor-grab motion-safe:active:cursor-grabbing ` +
        (className ?? "")
      }
    >
      <div
        className="motion-safe:will-change-transform motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-reduce:transition-none"
        style={
          reduced
            ? undefined
            : {
                transform: `perspective(560px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }
        }
      >
        <div
          className={`motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.07] motion-reduce:group-hover:scale-100 ${pressed ? "motion-safe:scale-[0.94]" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function StepVisual({ variant }: { variant: Variant }) {
  if (variant === "schedule") {
    return (
      <InteractiveStage
        label="Interactive illustration: tap a pickup slot on your phone"
        className="flex h-[170px] w-auto max-w-[210px] items-center justify-center sm:h-[195px] sm:max-w-[235px] min-[600px]:justify-start"
      >
        <div className="relative flex h-full w-auto items-center justify-center min-[600px]:justify-start">
          <div className="about-step-anim-glow pointer-events-none absolute inset-[-12%] rounded-full bg-gradient-to-br from-orange-services/20 to-transparent blur-2xl" />
          <div className="relative flex items-end gap-2.5">
            <div className="about-step-anim-card flex h-[148px] w-[76px] flex-col items-center rounded-[22px] border-2 border-[#E8DFD6] bg-white/95 p-2 shadow-lg shadow-black/8 ring-1 ring-white/80 backdrop-blur-[2px] transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-orange-services/15">
              <div className="mt-1.5 h-2 w-11 rounded-full bg-[#33302E]/10 transition-colors group-hover:bg-orange-services/20" />
              <div className="about-step-anim-float mt-3 flex justify-center">
                <CalendarDays
                  className="h-[3.25rem] w-[3.25rem] text-orange-services drop-shadow-sm transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100"
                  strokeWidth={1.5}
                />
              </div>
              <div className="about-step-anim-float-delayed mt-2.5 h-2 w-9 rounded bg-orange-services/35" />
            </div>
            <div className="about-step-anim-float-delayed flex items-end">
              <Smartphone
                className="h-[128px] w-[72px] text-[#584E46] drop-shadow-lg transition-colors group-hover:text-[#645853] sm:h-[136px] sm:w-[76px]"
                strokeWidth={1.25}
              />
            </div>
          </div>
        </div>
      </InteractiveStage>
    );
  }

  if (variant === "care") {
    return (
      <InteractiveStage
        label="Interactive illustration: gentle wash and care for fabrics"
        className="flex h-[170px] w-auto max-w-[220px] items-center justify-center sm:h-[195px] sm:max-w-[245px] min-[600px]:justify-start"
      >
        <div className="relative flex h-full w-auto items-center justify-center min-[600px]:justify-start">
          <div className="about-step-anim-glow pointer-events-none absolute inset-[-10%] rounded-full bg-gradient-to-br from-sky-200/45 to-transparent blur-2xl" />
          <div className="relative">
            <div className="rounded-2xl border border-sky-100/90 bg-white/95 px-6 py-8 shadow-lg shadow-sky-900/8 ring-1 ring-white/90 backdrop-blur-[2px] transition-all duration-300 group-hover:border-sky-200 group-hover:shadow-xl group-hover:shadow-sky-400/20">
              <div className="about-step-anim-shirt mx-auto flex h-[82px] w-16 items-center justify-center rounded-lg border border-[#E8DFD6] bg-gradient-to-b from-white to-sky-50 shadow-inner transition-shadow group-hover:shadow-md">
                <span
                  className="text-[2.65rem] leading-none transition-transform group-hover:rotate-[-6deg] group-hover:scale-110 motion-reduce:group-hover:rotate-0 motion-reduce:group-hover:scale-100"
                  aria-hidden
                >
                  👔
                </span>
              </div>
            </div>
            <div className="about-step-anim-drop-a absolute -right-0.5 top-0.5">
              <Droplets
                className="h-11 w-11 text-sky-400/90 drop-shadow-sm transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100"
                strokeWidth={1.5}
              />
            </div>
            <div className="about-step-anim-drop-b absolute -left-1 bottom-2.5">
              <Droplets
                className="h-9 w-9 text-sky-300/85 drop-shadow-sm transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </InteractiveStage>
    );
  }

  return (
    <InteractiveStage
      label="Interactive illustration: folded laundry ready in a delivery box"
      className="flex h-[170px] w-auto max-w-[260px] items-center justify-center gap-3.5 sm:h-[195px] sm:max-w-[285px] min-[600px]:justify-start"
    >
      <div className="relative flex h-full w-auto items-center justify-center gap-3.5 min-[600px]:justify-start">
        <div className="about-step-anim-glow pointer-events-none absolute inset-[-8%] rounded-full bg-gradient-to-br from-[#D4C4B8]/35 to-transparent blur-2xl" />
        <Package
          className="about-step-anim-package relative z-[1] h-28 w-28 text-[#9A8578] drop-shadow-md transition-colors group-hover:text-[#7a6a5e] sm:h-[7.5rem] sm:w-[7.5rem]"
          strokeWidth={1.25}
        />
        <div className="relative z-[1] flex flex-col gap-2">
          <div className="about-step-anim-fold-1 h-3.5 w-[5rem] rounded-sm bg-white shadow-md ring-1 ring-[#E8DFD6] transition-shadow group-hover:shadow-lg" />
          <div className="about-step-anim-fold-2 h-3.5 w-[6.25rem] rounded-sm bg-sky-50 shadow-md ring-1 ring-sky-100 transition-shadow group-hover:shadow-lg" />
          <div className="about-step-anim-fold-3 h-3.5 w-16 rounded-sm bg-white shadow-md ring-1 ring-[#E8DFD6] transition-shadow group-hover:shadow-lg" />
        </div>
      </div>
    </InteractiveStage>
  );
}
