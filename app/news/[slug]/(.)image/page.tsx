import { DUMMY_NEWS } from "@/public/dummy-news";
import { notFound } from "next/navigation";
import React, { Fragment } from "react";

interface Props {
  params: { slug: string };
}
const InterceptedImagePage = ({ params: { slug } }: Props) => {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();
  return (
    <Fragment>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </Fragment>
  );
};

export default InterceptedImagePage;
