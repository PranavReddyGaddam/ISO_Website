export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  category: 'Cultural' | 'Educational' | 'Networking' | 'Festival';
  imageUrl?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: 'Featured' | 'News' | 'Announcement';
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  major: string;
  year: string;
  bio: string;
  email: string;
  imageUrl?: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 'holi-2024',
    title: 'Holi Celebration 2024',
    date: 'March 15, 2024',
    description: 'Join us for the festival of colors! Enjoy traditional music, dance, delicious Indian food, and the joyful celebration of spring.',
    location: 'Student Union Ballroom',
    category: 'Festival',
  },
  {
    id: 'cultural-night-2024',
    title: 'Cultural Night 2024',
    date: 'March 22, 2024',
    description: 'An evening showcasing the diverse cultural heritage of India through performances, music, and artistic expressions from our talented community.',
    location: 'Morris Dailey Auditorium',
    category: 'Cultural',
  },
  {
    id: 'career-workshop-2024',
    title: 'Career Development Workshop',
    date: 'April 5, 2024',
    description: 'Professional development session with industry leaders and alumni networking. Learn about career opportunities in Silicon Valley.',
    location: 'Engineering Building',
    category: 'Educational',
  },
  {
    id: 'networking-mixer',
    title: 'Spring Networking Mixer',
    date: 'April 12, 2024',
    description: 'Connect with fellow students, alumni, and professionals from the Bay Area tech industry. Light refreshments provided.',
    location: 'Student Union Conference Room',
    category: 'Networking',
  },
  {
    id: 'bollywood-dance',
    title: 'Bollywood Dance Workshop',
    date: 'April 20, 2024',
    description: 'Learn traditional and modern Bollywood dance moves in this fun, interactive workshop suitable for all skill levels.',
    location: 'Recreation Center Dance Studio',
    category: 'Cultural',
  },
];

export const recentNews: NewsArticle[] = [
  {
    id: 'cultural-night-success',
    title: 'ISO SJSU Celebrates Record-Breaking Cultural Night 2024',
    date: 'March 10, 2024',
    excerpt: 'Our annual Cultural Night event attracted over 500 attendees, making it the most successful cultural celebration in ISO\'s history.',
    content: 'The event featured performances from 15 different student groups, showcasing the rich diversity of Indian culture through dance, music, and theater.',
    category: 'Featured',
  },
  {
    id: 'tech-partnership',
    title: 'New Partnership with Silicon Valley Tech Companies',
    date: 'March 8, 2024',
    excerpt: 'ISO has established partnerships with leading tech companies to provide internship and career opportunities for our members.',
    content: 'These partnerships will provide direct access to internships, mentorship programs, and career development opportunities.',
    category: 'News',
  },
  {
    id: 'scholarship-launch',
    title: 'Annual Scholarship Program Launch',
    date: 'March 5, 2024',
    excerpt: 'We are excited to announce the launch of our annual scholarship program to support outstanding Indian students at SJSU.',
    content: 'The scholarship program will award $50,000 in total scholarships to deserving students based on academic merit and community involvement.',
    category: 'Announcement',
  },
];

export const leadershipTeam: TeamMember[] = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    position: 'President',
    major: 'Computer Science',
    year: 'Senior',
    bio: 'Passionate about fostering cultural connections and academic excellence. Leading ISO to new heights with innovative programs.',
    email: 'president@iso-sjsu.org',
  },
  {
    id: 'arjun-patel',
    name: 'Arjun Patel',
    position: 'Vice President',
    major: 'Business Administration',
    year: 'Junior',
    bio: 'Dedicated to organizing impactful events and building community partnerships throughout Silicon Valley.',
    email: 'vp@iso-sjsu.org',
  },
  {
    id: 'kavya-reddy',
    name: 'Kavya Reddy',
    position: 'Secretary',
    major: 'Psychology',
    year: 'Sophomore',
    bio: 'Committed to maintaining clear communication and organizational efficiency for all ISO activities.',
    email: 'secretary@iso-sjsu.org',
  },
  {
    id: 'rohan-kumar',
    name: 'Rohan Kumar',
    position: 'Treasurer',
    major: 'Finance',
    year: 'Junior',
    bio: 'Ensuring financial transparency and responsible resource management for all organization activities.',
    email: 'treasurer@iso-sjsu.org',
  },
  {
    id: 'sneha-gupta',
    name: 'Sneha Gupta',
    position: 'Event Coordinator',
    major: 'Marketing',
    year: 'Senior',
    bio: 'Creating memorable experiences through innovative event planning and community engagement strategies.',
    email: 'events@iso-sjsu.org',
  },
  {
    id: 'vikram-singh',
    name: 'Vikram Singh',
    position: 'Cultural Director',
    major: 'Performing Arts',
    year: 'Graduate',
    bio: 'Preserving and promoting Indian cultural traditions through performances and educational workshops.',
    email: 'cultural@iso-sjsu.org',
  },
]; 