import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Film {
  @Field()
  title: string;

  @Field()
  director: string;

  @Field(() => Int)
  episodeId: number;

  @Field()
  openingCrawl: string;
}
