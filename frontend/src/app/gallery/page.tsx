"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "@/components/Components/Masonry/Masonry";

export default function GalleryPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const sampleItems = [
    {
      id: "1",
      img: "/Holi.png",
      url: "https://example.com/1",
      height: 400,
    },
    {
      id: "2",
      img: "/Holi_1.png",
      url: "https://example.com/2",
      height: 300,
    },
    {
      id: "3",
      img: "/Holi.png",
      url: "https://example.com/3",
      height: 250,
    },
    {
      id: "4",
      img: "/Pulkit.png",
      url: "https://example.com/4",
      height: 350,
    },
    {
      id: "5",
      img: "/Holi.png",
      url: "https://example.com/5",
      height: 280,
    },
    {
      id: "6",
      img: "/Holi_1.png",
      url: "https://example.com/6",
      height: 320,
    },
    {
      id: "7",
      img: "/Holi.png",
      url: "https://example.com/7",
      height: 350,
    },
    {
      id: "8",
      img: "/Pulkit.png",
      url: "https://example.com/8",
      height: 380,
    },
    {
      id: "9",
      img: "/Holi.png",
      url: "https://example.com/9",
      height: 260,
    },
    {
      id: "10",
      img: "/Holi_1.png",
      url: "https://example.com/10",
      height: 340,
    },
    {
      id: "11",
      img: "/Holi.png",
      url: "https://example.com/11",
      height: 360,
    },
    {
      id: "12",
      img: "/Pulkit.png",
      url: "https://example.com/12",
      height: 310,
    },
    {
      id: "13",
      img: "/Holi.png",
      url: "https://example.com/13",
      height: 360,
    },
    {
      id: "14",
      img: "/Holi_1.png",
      url: "https://example.com/14",
      height: 360,
    },
    {
      id: "15",
      img: "/Holi.png",
      url: "https://example.com/15",
      height: 300,
    },
  ];

  const handleImageClick = (id: string) => {
    setExpandedImage(expandedImage === id ? null : id);
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="h-[700px] mb-2">
        <Masonry
          items={sampleItems}
          animateFrom="random"
          stagger={0.1}
          scaleOnHover={true}
          hoverScale={1.05}
          blurToFocus={true}
          colorShiftOnHover={false}
          onItemClick={handleImageClick}
        />
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseExpanded}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={
                sampleItems.find((item) => item.id === expandedImage)?.img ||
                "/Holi.png"
              }
              alt="Expanded"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleCloseExpanded}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* View Full Gallery Button */}
      <div className="text-center">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/your-folder-id",
              "_blank"
            )
          }
          className="inline-block bg-gradient-to-r from-saffron to-gold text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 transform cursor-pointer border-2 border-amber-600 relative z-10 touch-manipulation"
        >
          View Full Gallery
        </button>
      </div>
    </div>
  );
}
