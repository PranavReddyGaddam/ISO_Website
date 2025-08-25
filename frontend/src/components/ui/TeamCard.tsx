import Image from 'next/image';

interface TeamCardProps {
  name: string;
  position: string;
  major?: string;
  year?: string;
  bio: string;
  email: string;
  imageUrl?: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
  };
}

export default function TeamCard({
  name,
  position,
  major,
  year,
  bio,
  email,
  imageUrl,
  socialLinks,
}: TeamCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Profile Image */}
      <div className="h-64 bg-gradient-to-br from-saffron to-gold flex items-center justify-center relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <span className="text-white font-bold text-6xl">
            {getInitials(name)}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">
          {name}
        </h3>
        
        <div className="text-saffron font-semibold mb-2">{position}</div>
        
        {(major || year) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {major && (
              <span className="bg-green/10 text-green px-2 py-1 rounded text-sm">
                {major}
              </span>
            )}
            {year && (
              <span className="bg-deepRed/10 text-deepRed px-2 py-1 rounded text-sm">
                {year}
              </span>
            )}
          </div>
        )}
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {bio}
        </p>
        
        <div className="flex items-center justify-between">
          <a 
            href={`mailto:${email}`}
            className="text-saffron hover:text-deepRed font-medium text-sm transition-colors duration-200"
          >
            Contact
          </a>
          
          {socialLinks && (
            <div className="flex space-x-2">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <span className="text-xs font-bold">in</span>
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200"
                >
                  <span className="text-xs font-bold">ig</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 