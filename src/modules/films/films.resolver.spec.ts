import { Test, TestingModule } from '@nestjs/testing';
import { FilmsResolver } from './films.resolver';
import { FilmsService } from './films.service';
import { Film } from './films.type';

describe('FilmsResolver', () => {
  let resolver: FilmsResolver;
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsResolver, FilmsService],
    }).compile();

    resolver = module.get<FilmsResolver>(FilmsResolver);
    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return all films', async () => {
    const mockFilms: Film[] = [
      {
        title: 'A New Hope',
        director: 'George Lucas',
        episodeId: 4,
        openingCrawl: 'It is a period of civil war...',
      },
    ];

    jest.spyOn(service, 'getAllFilms').mockResolvedValue(mockFilms);

    const films = await resolver.getAllFilms();
    expect(films).toEqual(mockFilms);
  });
});
