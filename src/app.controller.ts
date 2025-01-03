import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateIncidentEvent } from './CreateIncident.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  
    @EventPattern('new_incident')
    handleIncident(data: CreateIncidentEvent){
     this.appService.handleIncident(data);
    }
}
