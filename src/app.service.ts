import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  

  @MessagePattern({cmd:'new_incident'})
  handleIncident(data:any){
   console.log('New Incident received', data);
  }
}
