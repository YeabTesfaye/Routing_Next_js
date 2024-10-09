"use client";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { DUMMY_NEWS } from "@/public/dummy-news";

interface Props {
  params: { slug: string };
}
const InterceptedImagePage = ({ params: { slug } }: Props) => {
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);
  if (!newsItem) notFound();

  return (
    <Fragment>
      <div className="modal-backdrop" onClick={router.back} />
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
