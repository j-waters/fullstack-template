import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypegooseModule.forRoot(
      'mongodb://localhost:27017/{{ cookiecutter.project_slug }}',
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      formatError: (error) => {
        console.error('graphql error', error, error.originalError);
        return error;
      },
    }),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      db: 0,
      ttl: 600,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
