import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiResponse, ApiSecurity, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiSecurity('Bearer') 
@ApiResponse({ status: 401, description: 'ApiUnauthorizedResponse.'})
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
