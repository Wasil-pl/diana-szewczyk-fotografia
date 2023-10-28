import { Package } from '@prisma/client';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterDTO {
  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  package: Package;

  @Length(4, 40)
  @IsNotEmpty()
  @IsString()
  password: string;

  @Match('password')
  @IsNotEmpty()
  @Length(4, 40)
  @IsString()
  passwordRepeat: string;
}
