import { Injectable } from '@nestjs/common';
import { httpClient } from '../../common/http.service';
import { Film, SwapiFilm } from './films.type';

interface SwapiResponse<T> {
  results: T[];
}

@Injectable()
export class FilmsService {
  private readonly cache = new Map<string, Film[]>();

  async getAllFilms(): Promise<Film[]> {
    const cacheKey = 'films';
    const cachedFilms = this.cache.get(cacheKey);

    if (cachedFilms) {
      return cachedFilms;
    }

    const response = await httpClient.get<SwapiResponse<SwapiFilm>>('films/');
    const films = response.data.results.map((film) => ({
      title: film.title,
      director: film.director,
      episodeId: film.episode_id,
      openingCrawl: film.opening_crawl,
    }));

    // Cache the response for 24 hours (86400000 ms)
    this.cache.set(cacheKey, films);
    setTimeout(() => this.cache.delete(cacheKey), 86400000);

    return films;
  }
}
