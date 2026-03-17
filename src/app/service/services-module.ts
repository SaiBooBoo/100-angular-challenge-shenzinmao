import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentation } from '../pipe/pipe-documentation/pipe-documentation';
import { RouterModule } from '@angular/router';
import { SERVICE_ROUTES } from './services.routes';
import { ServiceDocumentation } from './services/service-documentation/service-documentation';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceDocumentation,
    RouterModule.forChild(SERVICE_ROUTES)
  ]
})
export class ServicesModule { }
