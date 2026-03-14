import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentation } from '../pipe/pipe-documentation/pipe-documentation';
import { RouterModule } from '@angular/router';
import { SERVICE_ROUTES } from './services.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipeDocumentation,
    RouterModule.forChild(SERVICE_ROUTES)
  ]
})
export class ServicesModule { }
