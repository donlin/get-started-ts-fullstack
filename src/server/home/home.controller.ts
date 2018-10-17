import { Controller, Get } from '@nestjs/common';
import { SimpleResponse } from '../shared/interfaces/simple-response';

@Controller('')
export class HomeController {
  constructor() {}

  @Get()
  async index(): Promise<any> {
    return { data: 'hello world' };
  }

  @Get('health-check')
  async healthCheck(): Promise<SimpleResponse> {
    const res: SimpleResponse = {
      data: 'OK'
    };
    return res;
  }
}
