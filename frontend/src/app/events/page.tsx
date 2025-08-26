"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export default function EventsPage() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // const handleCardClick = (card: typeof cards[number]) => {
  //   console.log("Card clicked:", card.title);
  //   console.log("Setting active to:", card);
  //   setActive(card);
  // };

  const handleCardClickSimple = (
    card: (typeof cards)[number]
  ) => {
    console.log("Simple click handler triggered for:", card.title);
    setActive(card);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for exciting cultural events, workshops, and community
            gatherings throughout the year.
          </p>
        </div>

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
              style={{ pointerEvents: "auto" }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                }}
                style={{ pointerEvents: "auto" }}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                style={{ pointerEvents: "auto" }}
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-4xl mx-auto">
          <ul className="w-full gap-4">
            {cards.map((card) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => handleCardClickSimple(card)}
                onMouseDown={() =>
                  console.log("Mouse down on card:", card.title)
                }
                onMouseUp={() => console.log("Mouse up on card:", card.title)}
                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border-b border-gray-200 last:border-b-0"
                style={{
                  pointerEvents: "auto",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div className="flex gap-4 flex-col md:flex-row ">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  {card.ctaText}
                </motion.button>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Traditional Dance Festival",
    title: "Raas Garba",
    src: "/Holi.png",
    ctaText: "Join",
    ctaLink: "https://www.facebook.com/mark_zuckerberg",
    content: () => {
      return (
        <p>
          Raas Garba is a traditional Gujarati dance form performed during Navratri celebrations. 
          It involves circular movements and rhythmic clapping, creating a vibrant and energetic atmosphere. 
          Participants dress in colorful traditional attire and dance to devotional music, celebrating the 
          victory of good over evil. This cultural event brings together the community in a spirit of joy, 
          unity, and cultural pride.
        </p>
      );
    },
  },
  {
    description: "Festival of Lights",
    title: "Roshni (Diwali)",
    src: "/Holi.png",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Roshni, our Diwali celebration, is one of the most anticipated events of the year. This festival 
          of lights symbolizes the victory of light over darkness and knowledge over ignorance. The event 
          features traditional diya lighting ceremonies, rangoli competitions, cultural performances, and 
          delicious Indian sweets. It&apos;s a time for the community to come together, share joy, and celebrate 
          the rich cultural heritage of India.
        </p>
      );
    },
  },
  {
    description: "Festival of Colors",
    title: "Holi",
    src: "/Holi.png",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Holi is a vibrant festival of colors that celebrates love, joy, and the arrival of spring. 
          This exuberant event features color throwing, traditional music, dance performances, and 
          delicious festive foods like gujiya and thandai. Participants come together to play with 
          colored powders and water, creating a kaleidoscope of colors and laughter. It&apos;s a celebration 
          that breaks down barriers and brings people of all backgrounds together in a spirit of unity and fun.
        </p>
      );
    },
  },
  {
    description: "Cricket Tournament",
    title: "Spardha",
    src: "/Holi.png",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Spardha is our annual cricket tournament that brings together cricket enthusiasts from across 
          the university. This competitive yet friendly tournament features multiple teams competing in 
          various formats of the game. Beyond just cricket, it&apos;s an opportunity for networking, building 
          friendships, and celebrating the sport that unites millions of Indians worldwide. The event 
          includes opening ceremonies, prize distributions, and cultural performances.
        </p>
      );
    },
  },
  {
    description: "Resume & Alumni Networking",
    title: "Parichay",
    src: "/Holi.png",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Parichay is our premier networking event that connects current students with successful alumni 
          and industry professionals. The event features resume workshops, career guidance sessions, 
          mock interviews, and networking opportunities. Alumni share their career journeys, offer 
          mentorship, and provide valuable insights into various industries. This event helps students 
          build professional connections and gain practical career advice from experienced professionals 
          in their fields of interest.
        </p>
      );
    },
  },
];
