import { Injectable } from '@nestjs/common';
import { Picture, Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class PicturesService {
  constructor(private prismaService: PrismaService) {}

  /* --------------------- POST PICTURES --------------------- */

  public savePictures(
    files: Express.Multer.File[],
    userId: User['id'],
  ): Promise<Prisma.BatchPayload> {
    const pictures = files.map((file) => {
      return {
        name: file.filename,
        userId,
        checkBox: false,
      };
    });

    return this.prismaService.picture.createMany({
      data: pictures,
    });
  }

  /* --------------------- GET PICTURE --------------------- */

  public getPicture(id: Picture['id']): Promise<Picture> {
    return this.prismaService.picture.findUnique({
      where: { id },
    });
  }

  /* --------------------- PUT CHECKBOX --------------------- */

  public async checkBoxPictures(
    id: Picture['id'],
    checkBoxPicture: boolean,
  ): Promise<Picture> {
    return this.prismaService.picture.update({
      where: { id },
      data: { checkBox: checkBoxPicture },
    });
  }
}
