import React from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  readTime: string;
  description: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, date, readTime, description, image }) => {
  return (
    <div className="p-6 space-y-4 max-w-sm  rounded-md">
       <Link to={`/news/${id}`}>
      <img src={image} alt="News" className="w-full h-56 object-cover rounded-md shadow-md" />
       </Link>
      <div className="flex items-center text-white space-x-2">
        <FiCalendar className="text-sm" />
        <span className="text-sm">{date}</span>
        <span>|</span>
        <FiClock className="text-sm" />
        <span className="text-sm">{readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-white">{description}</p>
      <Link to={`/news/${id}`} className="text-[#252A297A] font-semibold flex items-center hover:underline">
        Read more <span className="ml-2">→</span>
      </Link>
    </div>
  );
};

export default NewsCard;
