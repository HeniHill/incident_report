import { Injectable } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateIncidentEvent } from './CreateIncident.event';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {

  private transporter;

  constructor()
  {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'henokemafm@gmail.com', 
        pass:"0912986463@G" 
      }
     });
  }

  async sendMail(to: string, subject: string, text: string, html?: string){

    const mailOption={
      from: 'henokemafm@example.com',
      to,
      subject,
      text,
      html,
    };

    return await this.transporter.sendMail(mailOption);

  }
  

  handleIncident(data: CreateIncidentEvent){
   console.log('New Incident received', data);
   this.sendMail("henokemafm@example.com","Test Mailer","This is Test microservice")
  }
}
