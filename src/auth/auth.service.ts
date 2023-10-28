import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dtos/Register.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  /* --------------------- REGISTER USER --------------------- */

  public async register(registrationData: RegisterDTO) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    const userData = {
      surname: registrationData.surname,
      isChoosen: false,
    };
    return this.userService.create(userData, hashedPassword);
  }

  /* --------------------- VALIDATE USER --------------------- */

  public async validateUser(surname: string, password: string) {
    const user = await this.userService.getUserBySurname(surname);
    if (
      user &&
      (await bcrypt.compare(password, user.password.hashedPassword))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /* --------------------- CREATE SESSION --------------------- */

  public async createSession(user: any) {
    const payload = { surname: user.surname, sub: user.id };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('jwt.secret'),
      expiresIn: this.configService.get('jwt.expiresIn'),
    });

    return {
      access_token: accessToken,
    };
  }
}
