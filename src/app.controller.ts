import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  
    @EventPattern('new_incident')
    handleIncident(data:any){
     this.appService.handleIncident(data);
    }
}
