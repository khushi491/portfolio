"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  CreditCard,
  Coins,
  Hospital,
  HeartPulse,
  Stethoscope,
  Wallet,
  Boxes,
  Hexagon,
  Cloud,
  Server,
  Code,
  Brain,
  Bot,
  ShoppingCart,
} from "lucide-react";
import { MonogramSeal } from "@/components/monogram-seal";

type RingIcon = { Icon: LucideIcon; label: string };

type Ring = {
  radius: number;
  duration: number;
  reverse: boolean;
  icons: RingIcon[];
};

const rings: Ring[] = [
  {
    radius: 27,
    duration: 28,
    reverse: false,
    icons: [
      { Icon: Brain, label: "AI" },
      { Icon: Landmark, label: "Banking" },
      { Icon: HeartPulse, label: "Healthcare" },
      { Icon: Wallet, label: "Web3 wallet" },
    ],
  },
  {
    radius: 36.5,
    duration: 46,
    reverse: true,
    icons: [
      { Icon: Cloud, label: "Cloud" },
      { Icon: Hospital, label: "Hospital" },
      { Icon: CreditCard, label: "Payments" },
      { Icon: Code, label: "Software" },
      { Icon: ShoppingCart, label: "Commerce" },
    ],
  },
  {
    radius: 45.5,
    duration: 68,
    reverse: false,
    icons: [
      { Icon: Server, label: "Infrastructure" },
      { Icon: Stethoscope, label: "Care" },
      { Icon: Coins, label: "Fintech" },
      { Icon: Bot, label: "Automation" },
      { Icon: Boxes, label: "Blockchain" },
      { Icon: Hexagon, label: "Web3" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function IndustryOrbit() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none relative mx-auto hidden aspect-square w-full max-w-[24rem] lg:block"
      aria-hidden="true"
      initial={reduced ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.32, ease }}
    >
      <div className="orbit-glow" />

      {rings.map((ring) => (
        <div key={ring.radius} className="absolute inset-0">
          <div
            className="orbit-path"
            style={{
              width: `${ring.radius * 2}%`,
              height: `${ring.radius * 2}%`,
            }}
          />
          <motion.div
            className="absolute inset-0 will-change-transform"
            animate={reduced ? undefined : { rotate: ring.reverse ? -360 : 360 }}
            transition={
              reduced
                ? undefined
                : { duration: ring.duration, repeat: Infinity, ease: "linear" }
            }
          >
            {ring.icons.map(({ Icon, label }, index) => {
              const angle = (Math.PI * 2 * index) / ring.icons.length;
              const left = 50 + ring.radius * Math.cos(angle);
              const top = 50 + ring.radius * Math.sin(angle);

              return (
                <div
                  key={label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <motion.div
                    className="will-change-transform"
                    animate={
                      reduced ? undefined : { rotate: ring.reverse ? 360 : -360 }
                    }
                    transition={
                      reduced
                        ? undefined
                        : {
                            duration: ring.duration,
                            repeat: Infinity,
                            ease: "linear",
                          }
                    }
                  >
                    <motion.span
                      className="orbit-badge"
                      animate={reduced ? undefined : { y: [0, -5, 0] }}
                      transition={
                        reduced
                          ? undefined
                          : {
                              duration: 4.2 + (index % 3) * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.28,
                            }
                      }
                    >
                      <Icon strokeWidth={1.35} className="size-[1.05rem]" />
                    </motion.span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      ))}

      <div className="orbit-core">
        <MonogramSeal size={52} />
      </div>
    </motion.div>
  );
}
