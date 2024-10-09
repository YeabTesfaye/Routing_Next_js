import { Fragment, ReactNode } from "react";

export default function Layout({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) {
  return (
    <Fragment>
      <h1>News Archie </h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-filter">{latest}</section>
    </Fragment>
  );
}
