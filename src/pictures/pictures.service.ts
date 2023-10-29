import { BadRequestException, Injectable } from '@nestjs/common';
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

  /* --------------------- GET USER PICTURES --------------------- */

  public getUserPictures(userId: User['id']): Promise<Picture[]> {
    return this.prismaService.picture.findMany({
      where: { userId },
    });
  }

  /* --------------------- PUT CHECKBOX --------------------- */

  public async checkBoxPictures(
    id: Picture['id'],
    checkBoxPicture: boolean,
    userId: User['id'],
  ): Promise<Picture> {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException(`User with id ${userId} not found`);
    }

    if (user && user.isChoosen) {
      throw new BadRequestException(
        `User with id ${userId} already choosen pictures`,
      );
    }

    const updatedPictures = await this.prismaService.picture.update({
      where: { id },
      data: {
        checkBox: checkBoxPicture,
      },
    });

    await this.prismaService.user.update({
      where: { id: userId },
      data: {
        isChoosen: true,
      },
    });

    return updatedPictures;
  }

  /* --------------------- DELETE PICTURE --------------------- */

  public async deletePicture(id: Picture['id']): Promise<Picture> {
    return this.prismaService.picture.delete({
      where: { id },
    });
  }
}
