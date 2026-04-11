import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentation } from './pipe-documentation/pipe-documentation';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';


// routing
// truncate pipe
@NgModule({
  declarations: [
     PipeDocumentation,
     TruncatePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
