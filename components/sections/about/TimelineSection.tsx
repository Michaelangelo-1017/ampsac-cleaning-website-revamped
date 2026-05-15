"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Compass } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { TIMELINE } from "@/lib/site-data";

/* ─── Path data ──────────────────────────────────────────────────────────── */
// Desktop: 4 alternating gentle bends in a 1000×1700 viewBox.
// Mobile:  near-vertical single S in a 400×1700 viewBox.
// Slight control-point asymmetry on the desktop curve gives it a softer,
// hand-drawn feel rather than a stamped geometric one.
const DESKTOP_PATH =
  "M 500 60 " +
  "C 540 230, 720 240, 650 380 " +
  "C 590 530, 320 560, 350 720 " +
  "C 380 870, 700 970, 650 1080 " +
  "C 590 1220, 290 1290, 350 1440 " +
  "C 410 1560, 540 1530, 500 1640";

const MOBILE_PATH =
  "M 200 60 " +
  "C 210 230, 230 240, 220 380 " +
  "C 215 530, 175 560, 180 720 " +
  "C 185 870, 230 970, 220 1080 " +
  "C 215 1220, 170 1290, 180 1440 " +
  "C 190 1560, 210 1530, 200 1640";

/* ─── Pin positions ──────────────────────────────────────────────────────── */
type Side = "right" | "left" | "center";

interface PinPos {
  left: string;
  top: string;
  side: Side;
  threshold: number; // scroll progress at which card reveals
}

// Desktop pins sit at the path's waypoints (±15% from centre).
const DESKTOP_PINS: PinPos[] = [
  { left: "65%", top: "22.4%", side: "right",  threshold: 0.18 },
  { left: "35%", top: "42.4%", side: "left",   threshold: 0.38 },
  { left: "65%", top: "63.5%", side: "right",  threshold: 0.58 },
  { left: "35%", top: "84.7%", side: "left",   threshold: 0.78 },
  { left: "50%", top: "96.5%", side: "center", threshold: 0.93 },
];

// Mobile pins ride a gentler ±5% sway so cards have room to live.
const MOBILE_PINS: PinPos[] = [
  { left: "55%", top: "22.4%", side: "right",  threshold: 0.18 },
  { left: "45%", top: "42.4%", side: "left",   threshold: 0.38 },
  { left: "55%", top: "63.5%", side: "right",  threshold: 0.58 },
  { left: "45%", top: "84.7%", side: "left",   threshold: 0.78 },
  { left: "50%", top: "96.5%", side: "center", threshold: 0.93 },
];

/* ─── Marker dot ─────────────────────────────────────────────────────────── */

function PinDot({ comingSoon }: { comingSoon?: boolean }) {
  if (comingSoon) {
    return (
      <motion.span
        animate={{ scale: [1, 1.18, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
        className="block h-5 w-5 rounded-full border-2 border-dashed border-gold/85 bg-pearl"
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="block h-4 w-4 rounded-full bg-pearl ring-[2.5px] ring-gold shadow-[0_2px_8px_rgba(212,175,55,0.55)]"
    />
  );
}

/* ─── Pin + card pair ────────────────────────────────────────────────────── */

interface PinAndCardProps {
  pin: PinPos;
  index: number;
  scrollProgress: MotionValue<number>;
  data?: (typeof TIMELINE)[number];
  comingSoon?: boolean;
  idPrefix: string;
}

function PinAndCard({
  pin,
  index,
  scrollProgress,
  data,
  comingSoon,
  idPrefix,
}: PinAndCardProps) {
  const opacity = useTransform(
    scrollProgress,
    [pin.threshold, pin.threshold + 0.05],
    [0, 1]
  );
  const yMotion = useTransform(
    scrollProgress,
    [pin.threshold, pin.threshold + 0.05],
    [20, 0]
  );

  const cardStyle: React.CSSProperties =
    pin.side === "right"
      ? { left: `calc(${pin.left} + 1rem)`, top: pin.top, transform: "translateY(-50%)" }
      : pin.side === "left"
      ? { right: `calc(100% - ${pin.left} + 1rem)`, top: pin.top, transform: "translateY(-50%)" }
      : { left: "50%", top: `calc(${pin.top} + 2.5rem)`, transform: "translateX(-50%)" };

  const cardWidthClass =
    pin.side === "center" ? "w-[68%] md:w-[36%]" : "w-[40%] md:w-[26%]";

  const milestoneLabel = `Milestone ${String(index + 1).padStart(2, "0")}`;

  return (
    <>
      {/* Marker dot — anchored to the path waypoint */}
      <span
        className="absolute z-30 pointer-events-none"
        style={{ left: pin.left, top: pin.top, transform: "translate(-50%, -50%)" }}
      >
        <PinDot comingSoon={comingSoon} />
      </span>

      {/* Card */}
      <motion.div
        key={`${idPrefix}-${index}`}
        style={{ opacity, y: yMotion, ...cardStyle }}
        className={`absolute z-20 ${cardWidthClass}`}
      >
        {comingSoon ? (
          <div className="text-center">
            <p className="font-sans uppercase tracking-luxe-md text-[0.6rem] md:text-[0.65rem] text-gold mb-2">
              Milestone 05
            </p>
            <h3 className="font-display font-light text-[1.4rem] md:text-[1.8rem] leading-tight text-onyx">
              Coming Soon
            </h3>
            <span className="block h-px w-10 bg-gold/60 mx-auto mt-3" />
          </div>
        ) : data ? (
          <div
            className={
              pin.side === "left" ? "md:text-right" : pin.side === "right" ? "md:text-left" : ""
            }
          >
            <p className="font-sans uppercase tracking-luxe-md text-[0.55rem] md:text-[0.65rem] text-gold mb-2">
              {milestoneLabel}
            </p>
            <h3 className="font-display font-light text-[0.95rem] md:text-[1.55rem] leading-tight text-onyx mb-2">
              {data.title}
            </h3>
            <p className="text-[0.7rem] md:text-[0.9rem] leading-[1.7] text-onyx/65">
              {data.description}
            </p>
          </div>
        ) : null}
      </motion.div>
    </>
  );
}

/* ─── Shared SVG path render ─────────────────────────────────────────────── */

function PathSvg({
  d,
  viewBox,
  dashOffset,
  strokeWidth = 7,
}: {
  d: string;
  viewBox: string;
  dashOffset: MotionValue<number>;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* Faded baseline path — shows the route before the gold "ink" reaches it */}
      <path
        d={d}
        stroke="#D4AF37"
        strokeOpacity="0.14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Animated drawing path */}
      <motion.path
        d={d}
        pathLength={1}
        stroke="#D4AF37"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={1}
        style={{
          strokeDashoffset: dashOffset,
          filter: "drop-shadow(0 3px 6px rgba(212,175,55,0.35))",
        }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ─── Main section ───────────────────────────────────────────────────────── */

export default function AboutTimelineSection() {
  const trailRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trailRef,
    offset: ["start 0.9", "end 0.35"],
  });

  // Spring-smooth the progress so the line "inks" with a slight, organic lag.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  // 1 = path invisible, 0 = path fully drawn
  const dashOffset = useTransform(smoothProgress, [0, 1], [1, 0]);

  return (
    <section className="relative bg-pearl text-onyx section-pad overflow-hidden">
      {/* Faint architectural line grid, faded out at the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(212,175,55,0.07) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(212,175,55,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at center, black 25%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at center, black 25%, transparent 85%)",
        }}
      />

      <p
        aria-hidden="true"
        className="deco-text deco-text--dark absolute -bottom-12 -right-10 hidden lg:block"
      >
        2025
      </p>

      <div className="relative container-luxe">
        {/* Compass cue above the title */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <Compass
            size={22}
            strokeWidth={1.3}
            className="text-gold"
            aria-hidden="true"
          />
        </motion.div>

        <SectionTitle
          eyebrow="Milestones"
          title="Our timeline"
          subtitle="A winding trail of the moments that shaped AMPSAC City Clean — from foundation in 2025 toward the next bend in the road."
          className="mb-16 md:mb-24"
        />

        {/* Trail container — scroll progress is measured against this element */}
        <div ref={trailRef} className="relative mx-auto max-w-5xl">
          {/* ─── Desktop trail ─────────────────────────────────────────── */}
          <div
            className="relative hidden md:block"
            style={{ aspectRatio: "1000 / 1700" }}
          >
            <PathSvg
              d={DESKTOP_PATH}
              viewBox="0 0 1000 1700"
              dashOffset={dashOffset}
              strokeWidth={7}
            />
            {DESKTOP_PINS.slice(0, 4).map((pin, i) => (
              <PinAndCard
                key={`d-${i}`}
                idPrefix="desktop"
                pin={pin}
                index={i}
                scrollProgress={smoothProgress}
                data={TIMELINE[i]}
              />
            ))}
            <PinAndCard
              idPrefix="desktop"
              pin={DESKTOP_PINS[4]}
              index={4}
              scrollProgress={smoothProgress}
              comingSoon
            />
          </div>

          {/* ─── Mobile trail ──────────────────────────────────────────── */}
          <div
            className="relative md:hidden"
            style={{ aspectRatio: "400 / 1700" }}
          >
            <PathSvg
              d={MOBILE_PATH}
              viewBox="0 0 400 1700"
              dashOffset={dashOffset}
              strokeWidth={6}
            />
            {MOBILE_PINS.slice(0, 4).map((pin, i) => (
              <PinAndCard
                key={`m-${i}`}
                idPrefix="mobile"
                pin={pin}
                index={i}
                scrollProgress={smoothProgress}
                data={TIMELINE[i]}
              />
            ))}
            <PinAndCard
              idPrefix="mobile"
              pin={MOBILE_PINS[4]}
              index={4}
              scrollProgress={smoothProgress}
              comingSoon
            />
          </div>
        </div>
      </div>
    </section>
  );
}
