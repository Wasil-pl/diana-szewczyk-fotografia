import { Module } from '@nestjs/common';
import { PicturesController } from './pictures.controller';
import { PicturesService } from './pictures.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PicturesController],
  providers: [PicturesService],
  imports: [PrismaModule, UsersModule],
})
export class PicturesModule {}
