import { DUMMY_NEWS, NEW } from "@/public/dummy-news";
import Link from "next/link";
import React from "react";

interface Props {
  news: NEW[];
}
const NewsList = ({ news }: Props) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img
              src={`/images/news/${newsItem.image}`}
              alt={`${newsItem.title}`}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
