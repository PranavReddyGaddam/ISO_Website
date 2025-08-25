"use client";

import ISOProfileCard from "@/components/ui/ISOProfileCard";

const leadershipTeam = [
  {
    id: 1,
    name: "Pulkit Srivastava",
    position: "President",
    major: "Computer Science",
    year: "Senior",
    bio: "Passionate about fostering cultural connections and academic excellence. Leading ISO to new heights with innovative programs.",
    email: "president@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 2,
    name: "Kalpesh Patil",
    position: "Vice President",
    major: "Business Administration",
    year: "Junior",
    bio: "Dedicated to organizing impactful events and building community partnerships throughout Silicon Valley.",
    email: "vp@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 3,
    name: "Parag Vhora",
    position: "Secretary",
    major: "Psychology",
    year: "Sophomore",
    bio: "Committed to maintaining clear communication and organizational efficiency for all ISO activities.",
    email: "secretary@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 4,
    name: "Harsha Kata",
    position: "Director of Events",
    major: "Finance",
    year: "Junior",
    bio: "Ensuring financial transparency and responsible resource management for all organization activities.",
    email: "events@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 5,
    name: "Rutuja Nemane",
    position: "Director of Alumni Relations",
    major: "Marketing",
    year: "Senior",
    bio: "Creating memorable experiences through innovative event planning and community engagement strategies.",
    email: "alumni@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 6,
    name: "Naga Bhuvan Kamireddy",
    position: "Director of Finance",
    major: "Performing Arts",
    year: "Graduate",
    bio: "Preserving and promoting Indian cultural traditions through performances and educational workshops.",
    email: "finance@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 7,
    name: "Annika Dhebar",
    position: "Director of Marketing",
    major: "Communications",
    year: "Junior",
    bio: "Building strong relationships with media, partners, and the community to enhance ISO's visibility and impact.",
    email: "marketing@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
  {
    id: 8,
    name: "Rajeshwari Mittal",
    position: "Director of Social Media",
    major: "Computer Engineering",
    year: "Senior",
    bio: "Managing digital platforms and technological solutions to streamline organization operations and member engagement.",
    email: "socialmedia@iso-sjsu.org",
    status: "Available",
    avatarUrl: "/Pulkit.png",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated individuals who lead our organization and work
            tirelessly to create meaningful experiences for our vibrant
            community at SJSU.
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {leadershipTeam.map((leader) => (
            <div key={leader.id} className="flex justify-center">
              <ISOProfileCard
                avatarUrl={leader.avatarUrl}
                name={leader.name}
                title={leader.position}
                major={leader.major}
                year={leader.year}
                email={leader.email}
                bio={leader.bio}
                status={leader.status}
                enableTilt={true}
                showUserInfo={true}
                onContactClick={() => {
                  window.location.href = `mailto:${leader.email}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
