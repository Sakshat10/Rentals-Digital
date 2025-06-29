import React from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Import shared type
import NewsItem from '@/data/NewsData';

type NewsCardProps = Pick<NewsItem, 'id' | 'title' | 'date' | 'readTime' | 'description' | 'image'>;

const NewsCard: React.FC<NewsCardProps> = ({ id, title, date, readTime, description, image }) => {
  return (
    <div className="p-6 space-y-4 max-w-sm rounded-md  h-full flex flex-col">
      <Link to={`/news/${id}`}>
        <img src={image} alt={title} className="w-full h-56 object-cover rounded-md shadow-xl" />
      </Link>
      <div className="flex items-center text-white space-x-2">
        <FiCalendar className="text-sm" />
        <span className="text-sm">{date}</span>
        <span>|</span>
        <FiClock className="text-sm" />
        <span className="text-sm">{readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-white flex-grow">{description}</p>
      <Link to={`/news/${id}`} className="text-[#252A297A] font-semibold flex items-center hover:underline">
        Read more <span className="ml-2">→</span>
      </Link>
    </div>
  );
};

export default NewsCard;
