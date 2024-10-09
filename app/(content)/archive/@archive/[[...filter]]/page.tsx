import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { NEW } from "@/public/dummy-news";
import Link from "next/link";
import React, { Fragment } from "react";

interface Props {
  params: { filter?: number[] };
}

const FilteredNewsPage = ({ params }: Props) => {
  const { filter } = params;
  const selectedYear: number | undefined = filter ? filter[0] : undefined;
  const selectedMonth: number | undefined = filter ? filter[1] : undefined;
  let news: NEW[] = [];
  let links: number[] = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear) || [];
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth) || [];
    links = [];
  }
  let newsContent: JSX.Element = <p>No News Found for selected year</p>;
  if (news && news?.length > 0) {
    newsContent = <NewsList news={news} />;
  }


  return (
    <Fragment>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const herf = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={herf}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </Fragment>
  );
};

export default FilteredNewsPage;
