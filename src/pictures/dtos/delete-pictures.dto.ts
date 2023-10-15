import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class deletePictureDto {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  id: string;
}
