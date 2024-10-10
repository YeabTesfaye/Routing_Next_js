import { NEW } from "@/public/dummy-news";
import sql from "better-sqlite3";

interface yearResult {
  year: string;
}
interface monthResult {
  month: string;
}
const db = sql("data.db");
// function initDb() {
//   db.prepare(
//       `CREATE TABLE IF NOT EXISTS news (
//           id INTEGER PRIMARY KEY,
//           slug TEXT UNIQUE,
//           title TEXT,
//           content TEXT,
//           date TEXT,
//           image TEXT
//       )`
//   ).run();

//   const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get() as { count: number };

//   if (count === 0) {
//       const insert = db.prepare(
//           'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
//       );

//       DUMMY_NEWS.forEach((news) => {
//           insert.run(news.slug, news.title, news.content, news.date, news.image);
//       });
//   }
// }
// initDb();
export function getAllNews(): NEW[] {
  const news: NEW[] = db.prepare("SELECT * FROM news").all() as NEW[];
  return news;
}
export function getNewsItem(slug: string): NEW {
  const newsItem = db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as NEW;
  return newsItem;
}
export function getLatestNews() : NEW[] {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as NEW[];
  return latestNews;
}
export function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as yearResult[];

  const yearStrings = years.map((year) => year.year);

  return yearStrings;
}

export function getAvailableNewsMonths(year: number) {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as monthResult[];

  const monthStrings = months.map((month) => month.month);
  return monthStrings;
}

export  function getNewsForYear(year:number) : NEW[] {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as NEW[];


  return news;
}
export  function getNewsForYearAndMonth(year:number, month:number) : NEW[] {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as NEW[];
  return news;
}
