import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";


const DefaultFallback = () => {
  const latestNews = getLatestNews();
  return (
    <div>
      <h2>latest news ...</h2>
      <NewsList news={latestNews} />
    </div>
  );
};

export default DefaultFallback;
