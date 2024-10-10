import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Fragment } from "react";
import ModalaBackDrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

interface Props {
  params: { slug: string };
}
const InterceptedImagePage = ({ params: { slug } }: Props) => {
  const newsItem = getNewsItem(slug);
  if (!newsItem) notFound();

  return (
    <Fragment>
      <ModalaBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Link href={`/news/${newsItem.slug}/image`}>
            <img
              src={`/images/news/${newsItem?.image}`}
              alt={`${newsItem?.title}`}
            />
          </Link>
        </div>
      </dialog>
    </Fragment>
  );
};

export default InterceptedImagePage;
