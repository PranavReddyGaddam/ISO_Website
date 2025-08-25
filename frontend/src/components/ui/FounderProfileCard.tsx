"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

interface FounderProfileCardProps {
  avatarUrl?: string;
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
  email: string;
  linkedinUrl?: string;
  className?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

// ISO-themed gradients with Indian cultural colors
const ISO_GRADIENTS = {
  behind: `radial-gradient(farthest-side circle at 50% 50%,
    hsla(39, 100%, 75%, 0.1) 4%, 
    hsla(29, 100%, 65%, 0.075) 10%, 
    hsla(19, 80%, 55%, 0.05) 50%, 
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

const FounderProfileCard: React.FC<FounderProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  fullBio,
  email,
  linkedinUrl,
  className = "",
  isExpanded,
  onToggle,
}) => {
  // Get initials for fallback avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const handleContactClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank");
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className={`founder-card-wrapper ${className}`}>
      <style jsx>{`
        .founder-card-wrapper {
          perspective: 500px;
          transform: translate3d(0, 0, 0.1px);
          position: relative;
          max-width: ${isExpanded ? "500px" : "380px"};
          margin: 0 auto;
          transition: all 0.5s ease;
        }

        .founder-card-wrapper::before {
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

        .founder-card-wrapper:hover::before {
          filter: contrast(1) saturate(2) blur(40px) opacity(1);
          transform: scale(0.9) translate3d(0, 0, 0.1px);
        }

        .founder-card-wrapper:hover {
          --card-opacity: 1;
        }

        .founder-card {
          height: ${isExpanded ? "auto" : "520px"};
          aspect-ratio: ${isExpanded ? "auto" : "0.718"};
          border-radius: 30px;
          position: relative;
          background: white;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.5s ease;
          transform: translate3d(0, 0, 0.1px);
          overflow: hidden;
          cursor: pointer;
        }

        .founder-card:hover {
          transform: translate3d(0, -8px, 0.1px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .founder-inside {
          position: absolute;
          inset: 1px;
          background: ${ISO_GRADIENTS.inner};
          background-color: rgba(0, 0, 0, 0.9);
          border-radius: 30px;
          transform: translate3d(0, 0, 0.01px);
        }

        .founder-shine {
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
          background-position: 50% 50%;
          mix-blend-mode: color-dodge;
          opacity: 0.3;
          transform: translate3d(0, 0, 1px);
          z-index: 3;
          filter: brightness(0.66) contrast(1.33) saturate(0.33);
          transition: filter 0.6s ease;
        }

        .founder-card:hover .founder-shine {
          filter: brightness(0.85) contrast(1.5) saturate(0.5);
          opacity: 0.6;
        }

        .founder-glare {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background-image: radial-gradient(
            farthest-corner circle at 50% 50%,
            hsla(39, 25%, 80%, 0.3) 12%,
            hsla(19, 40%, 30%, 0.8) 90%
          );
          mix-blend-mode: overlay;
          filter: brightness(0.8) contrast(1.2);
          transform: translate3d(0, 0, 1.1px);
          z-index: 4;
        }

        @media (max-width: 768px) {
          .founder-card {
            height: ${isExpanded ? "auto" : "420px"};
          }
        }

        @media (max-width: 480px) {
          .founder-card {
            height: ${isExpanded ? "auto" : "380px"};
          }
        }
      `}</style>

      <div
        className="founder-card bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        {!isExpanded && (
          <>
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

              {/* Bottom info section */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-start justify-between bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-3">
                <div className="flex flex-col flex-1 min-w-0 mr-2">
                  <div className="text-white font-bold text-2xl drop-shadow-sm leading-tight">
                    {name}
                  </div>
                  <div className="text-white font-medium text-lg drop-shadow-sm mt-1 leading-tight">
                    {title}
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                  className="text-white hover:text-white/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 drop-shadow-sm flex-shrink-0 mt-1"
                  style={{ pointerEvents: "auto" }}
                  aria-label={`LinkedIn ${name}`}
                >
                  <FaLinkedin className="text-lg" />
                </button>
              </div>
            </div>
          </>
        )}

        {/* Expanded view */}
        {isExpanded && (
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="font-display font-extrabold text-3xl text-gray-800 mb-2">
                {name}
              </h3>
              <p className="text-saffron font-semibold text-lg">{title}</p>
            </div>

            <div className="flex justify-center mb-6">
              {avatarUrl ? (
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-saffron/20">
                  <Image
                    src={avatarUrl}
                    alt={`${name} avatar`}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-saffron via-gold to-green flex items-center justify-center text-4xl font-bold text-white border-4 border-saffron/20">
                  {getInitials(name)}
                </div>
              )}
            </div>

            <div className="text-gray-700 leading-relaxed mb-6">
              {fullBio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleContactClick();
                }}
                className="bg-gradient-to-r from-saffron to-gold text-white px-6 py-3 rounded-xl font-semibold hover:from-deepRed hover:to-red-600 transition-all duration-300 flex items-center space-x-2"
                aria-label={`LinkedIn ${name}`}
              >
                <FaLinkedin className="text-lg" />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FounderProfileCard;
