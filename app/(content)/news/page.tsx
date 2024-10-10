import React, { Fragment } from "react";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const  NewsPage = async() => {
  const news = getAllNews();
  return (
    <Fragment>
      <h1>News Page</h1>
      <NewsList news={news} />
    </Fragment>
  );
};

export default NewsPage;


