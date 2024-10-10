import { getNewsItem } from "@/lib/news";
import { DUMMY_NEWS } from "@/public/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { slug: string };
}
const ImagePage = ({ params: { slug } }: Props) => {
  const newsItem = getNewsItem(slug); 
  if (!newsItem) notFound();
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
    </div>
  );
};

export default ImagePage;
