import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentation } from './pipe-documentation/pipe-documentation';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';


// routing
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipeDocumentation,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
