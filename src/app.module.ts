import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://alexandre:alexandre013@crud-nestjs.e4nojjv.mongodb.net/?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
