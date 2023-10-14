import {
  Controller,
  // UseGuards,
  UseInterceptors,
  Post,
  UploadedFiles,
  Body,
  ParseUUIDPipe,
  BadRequestException,
} from '@nestjs/common';
import { PicturesService } from './pictures.service';
// import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/utils/upload.files';
import { Picture, User } from '@prisma/client';
import { acceptedFileTypes } from 'src/consts';
import { deleteFile } from 'src/utils/deleteFile';
// import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('pictures')
export class PicturesController {
  constructor(
    private picturesService: PicturesService,
    private usersService: UsersService,
  ) {}

  /* --------------------- POST PICTURES --------------------- */

  // @UseGuards(AdminAuthGuard)
  // @UseGuards(JwtAuthGuard)
  @Post('/')
  @UseInterceptors(FilesInterceptor('files', 50, multerOptions))
  public async postPictures(
    @UploadedFiles() files: Express.Multer.File[],
    @Body('userId', new ParseUUIDPipe()) userId: User['id'],
  ) {
    try {
      const user = await this.usersService.getUser(userId);

      if (!user) {
        throw new BadRequestException(`User with id ${userId} not found.`);
      }

      if (!files) {
        throw new BadRequestException('No files were uploaded.');
      }

      if (!userId) {
        throw new BadRequestException('No userId was provided.');
      }

      for (const file of files) {
        if (!acceptedFileTypes.includes(file.mimetype)) {
          throw new BadRequestException('Invalid file type.');
        }
      }
      return this.picturesService.savePictures(files, userId);
    } catch (error) {
      for (const file of files) {
        if (file) {
          deleteFile(file.filename);
        }
      }
      throw error;
    }
  }

  /* --------------------- CHECKBOX PICTURES --------------------- */

  // @UseGuards(JwtAuthGuard)
  @Post('/checkbox')
  public async checkBoxPictures(
    @Body() picturesData: { id: Picture['id']; checkBox: boolean }[],
  ) {
    if (!picturesData || picturesData.length === 0) {
      throw new BadRequestException('No pictures data provided.');
    }

    for (const pictureData of picturesData) {
      const picture = await this.picturesService.getPicture(pictureData.id);

      if (!picture) {
        throw new BadRequestException(
          `Picture with id ${pictureData.id} not found.`,
        );
      }
    }

    // const checkBoxPicture = checkBoxString === 'true';

    return Promise.all(
      picturesData.map((pictureData) =>
        this.picturesService.checkBoxPictures(
          pictureData.id,
          pictureData.checkBox,
        ),
      ),
    );
  }
}
