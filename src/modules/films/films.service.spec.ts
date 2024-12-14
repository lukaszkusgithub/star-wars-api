import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { httpClient } from '../../common/http.service';

jest.mock('../../common/http.service');

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of films', async () => {
    const mockFilms = [
      {
        title: 'A New Hope',
        director: 'George Lucas',
        episode_id: 4,
        opening_crawl: 'It is a period of civil war...',
      },
    ];

    (httpClient.get as jest.Mock).mockResolvedValueOnce({
      data: { results: mockFilms },
    });

    const films = await service.getAllFilms();
    expect(films).toEqual(
      mockFilms.map((film) => ({
        title: film.title,
        director: film.director,
        episodeId: film.episode_id,
        openingCrawl: film.opening_crawl,
      })),
    );
  });
});
