import axios from "axios";
import * as cheerio from "cheerio";

const BASE_URL = "https://devkg.com/ru/jobs";

export async function fetchDevKgVacancies() {
  const { data } = await axios.get(BASE_URL);
  const $ = cheerio.load(data);

  const vacancies: { title: string; company: string; link: string }[] = [];

  $(".job-card").each((_, el) => {
    const title = $(el).find(".job-card__title a").text().trim();
    const company = $(el).find(".job-card__company").text().trim();
    const link = "https://devkg.com" + $(el).find(".job-card__title a").attr("href");

    if (title && company && link) {
      vacancies.push({ title, company, link });
    }
  });

  return vacancies;
}
