import { Resolver, Query } from '@nestjs/graphql';
import { Film } from './films.type';
import { FilmsService } from './films.service';

@Resolver()
export class FilmsResolver {
  constructor(private readonly filmsService: FilmsService) {}

  @Query(() => [Film], { name: 'films' })
  async getAllFilms(): Promise<Film[]> {
    return this.filmsService.getAllFilms();
  }
}
