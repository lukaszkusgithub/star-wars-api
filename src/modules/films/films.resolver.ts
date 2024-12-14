import { Resolver, Query } from '@nestjs/graphql';
import { Film } from './films.type';

@Resolver()
export class FilmsResolver {
  @Query(() => [Film], { name: 'films' })
  getAllFilms(): Film[] {
    return [
      {
        title: 'A New Hope',
        director: 'George Lucas',
        episodeId: 4,
        openingCrawl: 'It is a period of civil war...',
      },
      {
        title: 'The Empire Strikes Back',
        director: 'Irvin Kershner',
        episodeId: 5,
        openingCrawl: 'It is a dark time for the Rebellion...',
      },
    ];
  }
}
