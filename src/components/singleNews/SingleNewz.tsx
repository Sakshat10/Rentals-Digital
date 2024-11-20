import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '@/data/NewsData';

const SingleNewz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsArticle = newsData.find((article) => article.id === parseInt(id || '0'));

  if (!newsArticle) {
    return <p className="text-center text-white mt-10">News article not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-custom-left to-custom-right text-white z-50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Back Button */}
        <button
          className="text-white font-semibold mb-4 hover:text-custom-right"
          onClick={() => window.history.back()}
        >
          ← Back to Latest News
        </button>

        {/* Title and Meta Information */}
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">{newsArticle.title}</h1>
        <div className="flex items-center gap-4 text-green-600 text-sm mb-6">
          <span className="mr-2 text-white">📅 {newsArticle.date}</span>
          <span className="text-white">⏱️ {newsArticle.readTime}</span>
        </div>

        {/* Image and Description */}
        <div className="flex items-start flex-wrap justify-between">
          <div className="rounded-lg w-fit overflow-hidden shadow-xl mb-8">
            <img src={newsArticle.image} alt={newsArticle.title} className="h-80 object-cover" />
          </div>

          <div className="text-lg lg:w-[45vw] leading-relaxed text-white">
            <p className="mb-4 text-justify">{newsArticle.description}</p>
            <p className="text-justify">{newsArticle.content.introduction}</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="mt-10 space-y-8">
          {newsArticle.content.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">{section.title}</h2>
              <p className="text-justify mb-4">{section.content}</p>

              {/* Check for `details` */}
              {'details' in section && section.details && (
                <ul className="list-disc pl-5 space-y-2 text-white">
                  {section.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}

              {/* Check for `features` */}
              {'features' in section && section.features && (
                <ul className="list-disc pl-5 space-y-2 text-white">
                  {section.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleNewz;
