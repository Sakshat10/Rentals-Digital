import NewsCard from './NewsCard';
import newsData from '@/data/NewsData';

function LatestNews() {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-white">Latest News</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id}
            title={news.title}
            date={news.date}
            readTime={news.readTime}
            description={news.description}
            image={news.image}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestNews;
