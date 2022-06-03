import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<html> <body> <p style="font-size: 100px;"> health </p> </body> </html>';
  }
}
