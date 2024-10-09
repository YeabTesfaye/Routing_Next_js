import { DUMMY_NEWS } from "@/public/dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    if (news.date) {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
    }
    return years;
  }, []).sort((a, b) => b - a); // Sort descending
}

export function getAvailableNewsMonths(year: number): number[]  {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    if (news.date) {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === year) {
        if (newsYear === +year) {
          const month = new Date(news.date).getMonth();
          if (!months.includes(month)) {
            months.push(month + 1);
          }
        }
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: number) {
  return DUMMY_NEWS.filter(
    (news) => news.date && new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return DUMMY_NEWS.filter((news) => {
    if (news.date) {
      const newsYear = new Date(news.date).getFullYear();
      const newsMonth = new Date(news.date).getMonth() + 1;
      return newsYear === year && newsMonth === month;
    }
    return false;
  });
}
