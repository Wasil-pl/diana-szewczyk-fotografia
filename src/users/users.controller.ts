import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { deleteFile } from 'src/utils/deleteFile';
import { PicturesService } from 'src/pictures/pictures.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private pictureService: PicturesService,
  ) {}

  /* --------------------- GET USERS --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/')
  public async getUsers() {
    const users = this.userService.getUsers();
    if (!users) {
      throw new NotFoundException(`Users not found`);
    }
    return users;
  }

  /* --------------------- GET USER ROLE --------------------- */

  @UseGuards(JwtAuthGuard)
  @Get('/role')
  public async getUserRole(@Req() req: any) {
    const userId = req.user.id;
    const user = await this.userService.getUser(userId);
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return { role: user.role };
  }

  /* --------------------- GET USER BY ID --------------------- */

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  public getUser(@Req() req: any) {
    const userId = req.user.id;
    const user = this.userService.getUser(userId);
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    return user;
  }

  /* --------------------- GET USER BY ID --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  public getUserById(@Param('id', new ParseUUIDPipe()) id: User['id']) {
    const user = this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  /* --------------------- DELETE USER --------------------- */

  @UseGuards(AdminAuthGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  public async deleteUser(@Param('id', new ParseUUIDPipe()) id: User['id']) {
    const user = await this.userService.getUser(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const pictures = await this.pictureService.getUserPictures(id);

    if (pictures.length > 0) {
      for (const picture of pictures) {
        deleteFile(picture.name);
      }
    }

    await this.userService.delete(id);

    return { message: `User ${user.surname} deleted` };
  }
}
