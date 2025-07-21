import React from "react";
import { ExternalLink } from "lucide-react";

interface BookmarkCardProps {
  url: string;
  title: string;
  description?: string;
  domain: string;
  thumbnail?: string;
  category?: string;
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({
  url,
  title,
  description,
  domain,
}) => {
  // 取得網站 favicon
  const getFavicon = (domain: string): string => {
    return `https://www.google.com/s2/favicons?sz=16&domain=${domain}`;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:border-gray-300 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 leading-5">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-4">
                {description}
              </p>
            )}
            <div className="flex items-center text-xs text-gray-400">
              <img
                src={getFavicon(domain)}
                alt=""
                className="w-3 h-3 mr-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <span>{domain}</span>
              <ExternalLink className="w-3 h-3 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BookmarkCard;
