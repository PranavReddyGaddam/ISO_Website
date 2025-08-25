"use client";

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

interface ISOProfileCardProps {
  avatarUrl?: string;
  name: string;
  title: string;
  major?: string;
  year?: string;
  email: string;
  bio?: string;
  status?: string;
  className?: string;
  enableTilt?: boolean;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

// ISO-themed gradients with Indian cultural colors
const ISO_GRADIENTS = {
  behind: `radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),
    hsla(39, 100%, 75%, var(--card-opacity)) 4%, 
    hsla(29, 100%, 65%, calc(var(--card-opacity) * 0.75)) 10%, 
    hsla(19, 80%, 55%, calc(var(--card-opacity) * 0.5)) 50%, 
    hsla(9, 0%, 30%, 0) 100%),
    radial-gradient(35% 52% at 55% 20%, #FF9933aa 0%, #FF993300 100%),
    radial-gradient(100% 100% at 50% 50%, #FFD700ff 1%, #FFD70000 76%),
    conic-gradient(from 124deg at 50% 50%, #FF9933ff 0%, #138808ff 25%, #B22222ff 50%, #FFD700ff 75%, #FF9933ff 100%)`,

  inner: `linear-gradient(145deg, #FF99338c 0%, #138808aa 100%)`,

  shine: {
    sunpillar1: "#FF9933", // Saffron
    sunpillar2: "#FFD700", // Gold
    sunpillar3: "#138808", // Green
    sunpillar4: "#B22222", // Deep Red
    sunpillar5: "#FF9933", // Saffron
    sunpillar6: "#FFD700", // Gold
  },
};

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
} as const;

const clamp = (value: number, min = 0, max = 100): number =>
  Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3): number =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ISOProfileCard: React.FC<ISOProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  email,
  className = "",
  enableTilt = true,
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Get initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (
      offsetX: number,
      offsetY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(
          Math.hypot(percentY - 50, percentX - 50) / 50,
          0,
          1
        )}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 15))}deg`,
        "--rotate-y": `${round(centerY / 12)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("active");
    card.classList.add("active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
      wrap.classList.remove("active");
      card.classList.remove("active");
    },
    [animationHandlers]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  ]);

  const handleContactClick = useCallback(() => {
    if (onContactClick) {
      onContactClick();
    } else {
      window.location.href = `mailto:${email}`;
    }
  }, [onContactClick, email]);

  return (
    <div className={`iso-card-wrapper ${className}`} ref={wrapRef}>
      <style jsx>{`
        :global(:root) {
          --pointer-x: 50%;
          --pointer-y: 50%;
          --pointer-from-center: 0;
          --pointer-from-top: 0.5;
          --pointer-from-left: 0.5;
          --card-opacity: 0;
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          --background-x: 50%;
          --background-y: 50%;
        }

        .iso-card-wrapper {
          perspective: 500px;
          transform: translate3d(0, 0, 0.1px);
          position: relative;
          touch-action: none;
          max-width: 240px;
          margin: 0 auto;
        }

        .iso-card-wrapper::before {
          content: "";
          position: absolute;
          inset: -10px;
          background-image: ${ISO_GRADIENTS.behind};
          border-radius: 30px;
          transition: all 0.5s ease;
          filter: contrast(2) saturate(2) blur(36px);
          transform: scale(0.8) translate3d(0, 0, 0.1px);
          background-size: 100% 100%;
          opacity: 0;
        }

        .iso-card-wrapper:hover::before,
        .iso-card-wrapper.active::before {
          filter: contrast(1) saturate(2) blur(40px) opacity(1);
          transform: scale(0.9) translate3d(0, 0, 0.1px);
        }

        .iso-card-wrapper:hover,
        .iso-card-wrapper.active {
          --card-opacity: 1;
        }

        .iso-card {
          height: 400px;
          aspect-ratio: 0.718;
          border-radius: 30px;
          position: relative;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.8)
            calc((var(--pointer-from-left) * 10px) - 3px)
            calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
          transition: transform 1s ease;
          transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
          overflow: hidden;
        }

        .iso-card:hover,
        .iso-card.active {
          transition: none;
          transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y))
            rotateY(var(--rotate-x));
        }

        .iso-inside {
          position: absolute;
          inset: 1px;
          background: ${ISO_GRADIENTS.inner};
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: 30px;
          transform: translate3d(0, 0, 0.01px);
        }

        .iso-shine {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: repeating-linear-gradient(
            0deg,
            ${ISO_GRADIENTS.shine.sunpillar1} 5%,
            ${ISO_GRADIENTS.shine.sunpillar2} 10%,
            ${ISO_GRADIENTS.shine.sunpillar3} 15%,
            ${ISO_GRADIENTS.shine.sunpillar4} 20%,
            ${ISO_GRADIENTS.shine.sunpillar5} 25%,
            ${ISO_GRADIENTS.shine.sunpillar6} 30%
          );
          background-size: 500% 500%;
          background-position: var(--background-x) var(--background-y);
          mix-blend-mode: color-dodge;
          opacity: 0.3;
          transform: translate3d(0, 0, 1px);
          z-index: 3;
          filter: brightness(0.66) contrast(1.33) saturate(0.33);
          transition: filter 0.6s ease;
        }

        .iso-card:hover .iso-shine,
        .iso-card.active .iso-shine {
          filter: brightness(0.85) contrast(1.5) saturate(0.5);
          opacity: 0.6;
        }

        .iso-glare {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background-image: radial-gradient(
            farthest-corner circle at var(--pointer-x) var(--pointer-y),
            hsla(39, 25%, 80%, 0.3) 12%,
            hsla(19, 40%, 30%, 0.8) 90%
          );
          mix-blend-mode: overlay;
          filter: brightness(0.8) contrast(1.2);
          transform: translate3d(0, 0, 1.1px);
          z-index: 4;
        }

        @media (max-width: 768px) {
          .iso-card {
            height: 360px;
          }
        }

        @media (max-width: 480px) {
          .iso-card {
            height: 320px;
          }
        }
      `}</style>

      <div
        ref={cardRef}
        className="iso-card bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        {/* Avatar Section - Full card image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`${name} avatar`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-saffron via-gold to-green flex items-center justify-center text-8xl font-bold text-white">
              {getInitials(name)}
            </div>
          )}

          {/* Background overlay for bottom section readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {showUserInfo && (
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-start justify-between bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-3">
              <div className="flex flex-col flex-1 min-w-0 mr-2">
                <div className="text-white font-bold text-sm drop-shadow-sm leading-tight">
                  {name}
                </div>
                <div className="text-white font-medium text-xs drop-shadow-sm mt-1 leading-tight">
                  {title}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                <button
                  onClick={handleContactClick}
                  className="text-white hover:text-white/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 drop-shadow-sm"
                  style={{ pointerEvents: "auto" }}
                  aria-label={`LinkedIn ${name}`}
                >
                  <FaLinkedin className="text-lg" />
                </button>
                <button
                  onClick={handleContactClick}
                  className="text-white hover:text-white/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 drop-shadow-sm"
                  style={{ pointerEvents: "auto" }}
                  aria-label={`Instagram ${name}`}
                >
                  <FaInstagram className="text-lg" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ISOProfileCard;
