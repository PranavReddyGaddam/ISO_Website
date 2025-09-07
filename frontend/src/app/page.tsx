import Link from "next/link";
// import ShinyText from "@/components/TextAnimations/ShinyText";
import TextType from "@/components/TextType/TextType";
import {
  
  FaTheaterMasks,
  FaGraduationCap,
  FaMusic,
} from "react-icons/fa";

export default function Home() {
  return (
    <main role="main" className="min-h-screen">
      {/* Hero Section - Cultural Authenticity + Strong CTA */}
      <section
        role="banner"
        className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-32 text-white overflow-hidden"
      >
        {/* Dark overlay for better text contrast with aurora background */}
        <div className="absolute inset-0" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-8xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-medium leading-tight tracking-tight font-aeonik text-slate-700 dark:text-slate-200 px-2">
                Your Desi Family in the Heart of{' '}
                <span
                  className="bg-gradient-to-r bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #FF9933, #FF5E13, #FF9933, #B22222, #FF9933  )'
                  }}
                >
                  Silicon Valley
                </span>
              </h1>

              <p className="mx-auto max-w-xl mt-3 sm:mt-5 text-base sm:text-lg lg:text-xl font-medium text-balance text-slate-600 dark:text-slate-300 px-4">
                Experience SJSU beyond classrooms through celebration,
                collaboration, and community
              </p>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 justify-center items-center mb-8 sm:mb-12 px-4">
              <Link
                href="/events"
                className="group bg-white dark:bg-gray-800 text-slate-800 dark:text-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-white/50 focus:outline-none shadow-lg w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Join Our Events</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/about"
                className="group bg-white/40 dark:bg-gray-800/40 border-2 border-white dark:border-gray-600 text-slate-800 dark:text-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white dark:hover:bg-gray-700 hover:text-slate-800 dark:hover:text-slate-200 transition-all duration-300 focus:ring-4 focus:ring-white/50 focus:outline-none shadow-lg w-full sm:w-auto"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Learn Our Story</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-4 sm:border-8 border-white/20 shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <h2
                  id="upcoming-events"
                  className="font-aeonik text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 px-2"
                >
                  <TextType
                    text={["Upcoming Events"]}
                    typingSpeed={100}
                    pauseDuration={1}
                    deletingSpeed={100}
                    showCursor={false}
                    cursorCharacter="🎉"
                    className="text-black/90 dark:text-white/90"
                    textColors={["#000000", "#000000", "#000000"]}
                  />
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                  Celebrate, Learn, and Connect 
                </p>
              </div>

              {/* Featured Event Card */}
              <div className="mb-6 sm:mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">MAR</div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">15</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">Holi Celebration</h3>
                        <p className="text-gray-600 dark:text-gray-300">Student Union · 6:00–8:00 PM</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <button className="px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Remind me
                      </button>
                      <button className="px-4 py-2 text-sm rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Event Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    title: "Cultural Night",
                    date: "MAR 22",
                    icon: FaTheaterMasks,
                  },
                  {
                    title: "Career Workshop",
                    date: "APR 5",
                    icon: FaGraduationCap,
                  },
                  { 
                    title: "Bollywood Dance", 
                    date: "APR 20", 
                    icon: FaMusic 
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 cursor-pointer hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <event.icon className="text-xl text-gray-600 dark:text-gray-300" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">{event.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{event.date}</p>
                      <button className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Remind me
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/events"
                  className="inline-flex items-center px-6 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  View all events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
