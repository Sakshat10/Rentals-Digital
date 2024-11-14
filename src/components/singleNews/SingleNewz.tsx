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
    <div className="min-h-screen  bg-gradient-to-r from-custom-left to-custom-right text-white">
      <div className="container  mx-auto px-4 lg:px-8 py-16">
        <button className="text-white font-semibold mb-4 hover:text-custom-right" onClick={() => window.history.back()}>
          ← Back to Latest News
        </button>

        <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">{newsArticle.title}</h1>
        <div className="flex items-center gap-1 text-green-600 text-sm mb-6">
          <span className="mr-2 text-white">📅  {newsArticle.date}</span>
          <span className='text-white'>⏱️ {newsArticle.readTime}</span>
        </div>

        <div className='flex items-start flex-wrap justify-between'>

        <div className="rounded-lg w-fit overflow-hidden shadow-xl mb-8">
          <img src={newsArticle.image} alt={newsArticle.title} className=" h-80 object-cover" />
        </div>

        <div className="text-lg  lg:w-[45vw] leading-relaxed z-50 text-white">
          <p className='mb-4 text-justify'>{newsArticle.description}</p>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ut! Tempora reiciendis accusantium mollitia voluptatem. In eos quisquam temporibus error minima sint, iusto architecto, repellendus repudiandae commodi cupiditate velit enim a quibusdam aperiam, aliquam totam? Vero iure cumque ipsam enim nemo sint minima voluptate animi totam unde consequatur cum, est eaque culpa corporis ipsa. Labore aliquam ad magnam tenetur rem perferendis ipsa quas! Tenetur perspiciatis hic earum quidem porro, quasi numquam unde? Provident in magnam nostrum, et beatae, praesentium impedit ipsam tenetur, modi deleniti quam cum natus eius non pariatur!</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewz;
