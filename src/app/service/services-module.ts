import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SERVICE_ROUTES } from './services.routes';
import { ServiceDocumentation } from './services/service-documentation/service-documentation';

@NgModule({
  declarations: [
    ServiceDocumentation
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICE_ROUTES)
  ]
})
export class ServicesModule { }
