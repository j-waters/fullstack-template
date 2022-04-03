import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => Boolean)
  test() {
    return true;
  }
}
