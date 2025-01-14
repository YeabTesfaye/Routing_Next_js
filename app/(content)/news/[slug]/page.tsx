import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}
const NewsDetailPage = ({ params: { slug } }: Props) => {
  const newsItem = getNewsItem(slug);
  if (!newsItem) notFound();
  return (
    <article className="news-article">
      <Link href={`/news/${newsItem.slug}/image`}>
        <img
          src={`/images/news/${newsItem?.image}`}
          alt={`${newsItem?.title}`}
        />
      </Link>
      <h1>{newsItem?.title}</h1>
      <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      <p>{newsItem?.content}</p>
    </article>
  );
};

export default NewsDetailPage;
