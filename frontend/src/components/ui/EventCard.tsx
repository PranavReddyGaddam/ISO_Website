import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  category: string;
  imageUrl?: string;
  onRSVP?: () => void;
  featured?: boolean;
}

export default function EventCard({
  id,
  title,
  date,
  description,
  location,
  category,
  imageUrl,
  onRSVP,
  featured = false,
}: EventCardProps) {
  const getCategoryConfig = (category: string) => {
    switch (category.toLowerCase()) {
      case 'cultural':
        return { 
          bg: 'bg-saffron', 
          gradient: 'from-saffron to-gold',
          icon: '🎭',
          hoverBg: 'hover:bg-gold'
        };
      case 'educational':
        return { 
          bg: 'bg-deepRed', 
          gradient: 'from-deepRed to-red-600',
          icon: '📚',
          hoverBg: 'hover:bg-red-700'
        };
      case 'networking':
        return { 
          bg: 'bg-green', 
          gradient: 'from-green to-emerald-600',
          icon: '🤝',
          hoverBg: 'hover:bg-emerald-700'
        };
      case 'festival':
        return { 
          bg: 'bg-gold', 
          gradient: 'from-gold to-yellow-500',
          icon: '🎊',
          hoverBg: 'hover:bg-yellow-600'
        };
      default:
        return { 
          bg: 'bg-saffron', 
          gradient: 'from-saffron to-gold',
          icon: '🎉',
          hoverBg: 'hover:bg-gold'
        };
    }
  };

  const config = getCategoryConfig(category);

  if (featured) {
    return (
      <article className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden border border-gray-100">
        {/* Featured Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gold text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <span>⭐</span>
            <span>Featured</span>
          </div>
        </div>

        {/* Image Section */}
        <div className={`relative h-64 bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <span className="text-7xl text-white/90 group-hover:scale-110 transition-transform duration-500">
              {config.icon}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Category Badge on Image */}
          <div className="absolute top-4 right-4">
            <div className={`${config.bg} text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm bg-opacity-90`}>
              {category}
            </div>
          </div>
        </div>
        
        <div className="p-8">
          {/* Date */}
          <div className="flex items-center space-x-2 text-saffron font-medium mb-3">
            <span>📅</span>
            <span className="text-lg">{date}</span>
          </div>
          
          {/* Title */}
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-saffron transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {description}
          </p>
          
          {/* Location & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-500">
              <span>📍</span>
              <span className="font-medium">{location}</span>
            </div>
            
            <div className="flex space-x-3">
              <Link
                href={`/events/${id}`}
                className="text-saffron hover:text-deepRed font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/30 rounded-lg px-2 py-1"
              >
                Details
              </Link>
              {onRSVP && (
                <button
                  onClick={onRSVP}
                  className={`${config.bg} ${config.hoverBg} text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-saffron/30 shadow-lg hover:shadow-xl`}
                  aria-label={`RSVP for ${title}`}
                >
                  RSVP
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-saffron/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </article>
    );
  }

  // Regular Event Card
  return (
    <article className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100">
      {/* Event Image */}
      <div className={`relative h-48 bg-gradient-to-br ${config.gradient} flex items-center justify-center overflow-hidden`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <span className="text-5xl text-white/90 group-hover:scale-110 transition-transform duration-300">
            {config.icon}
          </span>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <div className={`${config.bg} text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-opacity-90 flex items-center space-x-1`}>
            <span>{config.icon}</span>
            <span>{category}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Date */}
        <div className="text-saffron font-medium mb-2 flex items-center space-x-1">
          <span>📅</span>
          <span>{date}</span>
        </div>
        
        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-saffron transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-500 mb-4">
          <span>📍</span>
          <span className="text-sm font-medium">{location}</span>
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <Link
            href={`/events/${id}`}
            className="text-saffron hover:text-deepRed font-semibold text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-saffron/30 rounded-lg px-2 py-1"
          >
            Learn More →
          </Link>
          
          {onRSVP && (
            <button
              onClick={onRSVP}
              className={`${config.bg} ${config.hoverBg} text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-saffron/30 shadow-md hover:shadow-lg`}
              aria-label={`RSVP for ${title}`}
            >
              RSVP
            </button>
          )}
        </div>
      </div>
      
      {/* Subtle Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-saffron/3 to-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
    </article>
  );
} 