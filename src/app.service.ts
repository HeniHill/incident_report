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
        pass:"" 
      }
     });
  }

  async sendMail(to: string, subject: string, html: string){

    const mailOption={
      from: 'henokemafm@gmail.com',
      to,
      subject,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333;">
          <h1 style="color: #4CAF50;">New Incident Reported!</h1>
          <p>Dear Team,</p>
          <p>${html}</p>
         
          <p>>support page</a>.</p>
          <footer style="font-size: 12px; color: #777777;">
              &copy; 2025 ATZ Company. All rights reserved.<br>
              +251214785
          </footer>
      </div>
  `,
    };

    return await this.transporter.sendMail(mailOption);

  }
  

  handleIncident(data: CreateIncidentEvent){
   console.log('New Incident received', data);
   this.sendMail("henokemafm@gmail.com",data.data.title,data.data.description);
  }
}
