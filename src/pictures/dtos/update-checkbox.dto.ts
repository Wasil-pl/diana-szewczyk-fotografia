import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCheckboxDto {
  @IsNotEmpty()
  @IsBoolean()
  checkBox: boolean;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  id: string;
}
