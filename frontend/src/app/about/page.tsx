"use client";

import { useState } from "react";
import FounderProfileCard from "@/components/ui/FounderProfileCard";

export default function AboutPage() {
  const [expandedFounder, setExpandedFounder] = useState<string | null>(null);

  const founderBios = {
    anil: {
      name: "Dr. Anil Kumar",
      title: "Co-Founder",
      shortBio:
        "One of the visionary founders who established ISO with the goal of creating a home away from home for Indian students at SJSU.",
      fullBio: `Anil Kumar is one of the visionary co-founders of the Indian Student Organization at SJSU. Born and raised in India, Anil came to the United States with a dream of creating a supportive community for Indian students navigating the challenges of studying abroad.

During his time at SJSU, Anil recognized the need for a cultural organization that would not only celebrate Indian heritage but also provide academic support, networking opportunities, and a sense of belonging for the growing Indian student population.

His leadership and dedication were instrumental in establishing ISO's foundation, setting up the organization's first cultural events, and building relationships with the university administration. Anil's vision of creating a "home away from home" continues to guide ISO's mission today.

After graduating from SJSU, Anil went on to have a successful career in technology, but his commitment to fostering Indian cultural connections remains strong. He continues to support ISO as an alumni mentor and advisor.`,
    },
    sharvari: {
      name: "Dr. Sharvari Dixit",
      title: "Co-Founder",
      shortBio:
        "Co-founder who played a pivotal role in establishing ISO and fostering the cultural community that continues to thrive today.",
      fullBio: `Sharvari Dixit is a passionate co-founder of the Indian Student Organization at SJSU, whose dedication to cultural preservation and community building has left an indelible mark on the organization.

Growing up in a family that deeply valued Indian traditions, Sharvari brought her cultural heritage to SJSU and recognized the importance of creating spaces where students could celebrate their roots while embracing new academic and cultural experiences.

As a co-founder, Sharvari played a crucial role in developing ISO's early programs, including cultural workshops, traditional dance performances, and community outreach initiatives. Her organizational skills and cultural knowledge helped establish many of the traditions that ISO continues to celebrate today.

Sharvari's commitment to education and cultural exchange extended beyond ISO. She actively worked to bridge cultural gaps between the Indian student community and the broader SJSU population, organizing events that welcomed students from all backgrounds to learn about Indian culture.

Today, Sharvari remains involved with ISO as an alumni advisor, sharing her wisdom and experience with new generations of student leaders. Her legacy of cultural pride and community service continues to inspire ISO members.`,
    },
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About ISO SJSU
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg text-justify">
            Founded with the vision of celebrating Indian culture and building a
            strong community, the Indian Student Organization at SJSU has been a
            cornerstone of cultural diversity and academic excellence on campus
            for over two decades.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg text-justify">
            The Indian Student Organization at San Jose State University
            represents more than just a student group—it&apos;s a vibrant
            community that bridges the gap between traditional Indian values and
            modern academic life. Since our establishment, we&apos;ve been
            dedicated to preserving and promoting the rich cultural heritage of
            India while fostering academic excellence and leadership
            development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg text-justify">
            Our organization serves as a home away from home for Indian
            students, providing a supportive environment where cultural identity
            is celebrated and cherished. Through various events, workshops, and
            community initiatives, we create opportunities for students to
            connect with their roots while building meaningful relationships
            with peers from diverse backgrounds.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-lg text-justify">
            At ISO SJSU, we believe in the power of community and cultural
            exchange. Our organization actively collaborates with other cultural
            groups on campus, local Indian communities, and Silicon Valley
            organizations to create a network of support and opportunities for
            our members.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg text-justify mb-4">
            From traditional dance performances and cultural festivals to
            professional networking events and community service projects, we
            offer a comprehensive platform for students to grow academically,
            culturally, and professionally. Our commitment to excellence extends
            beyond campus boundaries, making a positive impact in the broader
            Bay Area community.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-16 text-gray-900">
            Our Founders
          </h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Anil Kumar */}
            <FounderProfileCard
              avatarUrl="/Pulkit.png"
              name={founderBios.anil.name}
              title={founderBios.anil.title}
              shortBio={founderBios.anil.shortBio}
              fullBio={founderBios.anil.fullBio}
              email="anil.kumar@iso-sjsu.org"
              linkedinUrl="https://linkedin.com/in/anil-kumar-iso"
              isExpanded={expandedFounder === "anil"}
              onToggle={() =>
                setExpandedFounder(expandedFounder === "anil" ? null : "anil")
              }
            />

            {/* Sharvari Dixit */}
            <FounderProfileCard
              avatarUrl="/Pulkit.png"
              name={founderBios.sharvari.name}
              title={founderBios.sharvari.title}
              shortBio={founderBios.sharvari.shortBio}
              fullBio={founderBios.sharvari.fullBio}
              email="sharvari.dixit@iso-sjsu.org"
              linkedinUrl="https://linkedin.com/in/sharvari-dixit-iso"
              isExpanded={expandedFounder === "sharvari"}
              onToggle={() =>
                setExpandedFounder(
                  expandedFounder === "sharvari" ? null : "sharvari"
                )
              }
            />
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">
            Our History
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  2007 - Foundation
                </h3>
                <p className="text-gray-600">
                  ISO was established by a group of passionate Indian students
                  with the goal of creating a home away from home for the
                  growing Indian student population at SJSU.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  2005 - Growth & Recognition
                </h3>
                <p className="text-gray-600">
                  ISO gained official recognition from SJSU and began organizing
                  large-scale cultural events, including our signature Cultural
                  Night that continues today.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-deepRed rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  2010 - Community Outreach
                </h3>
                <p className="text-gray-600">
                  Expanded our mission to include community service and
                  established partnerships with local Indian organizations and
                  Silicon Valley companies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-gold rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  2020 - Digital Innovation
                </h3>
                <p className="text-gray-600">
                  Adapted to the digital age by launching online cultural events
                  and virtual networking sessions, maintaining community
                  connections during challenging times.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">
                  2024 - Present Day
                </h3>
                <p className="text-gray-600">
                  Today, ISO continues to thrive with over 300 active members,
                  hosting dozens of events annually and maintaining strong ties
                  with the broader SJSU community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              To preserve and promote Indian culture while fostering academic
              excellence, leadership development, and community service among
              students at San Jose State University. We strive to create an
              inclusive environment where all students can learn about and
              appreciate the rich heritage of India.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              To become the premier cultural organization that bridges the gap
              between traditional Indian values and modern academic pursuits,
              creating future leaders who will contribute positively to both the
              Indian-American community and society at large.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
