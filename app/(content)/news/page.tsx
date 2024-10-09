import { DUMMY_NEWS } from "@/public/dummy-news";
import React, { Fragment } from "react";
import NewsList from "@/components/news-list";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </Fragment>
  );
};

export default NewsPage;
