import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentation } from './pipe-documentation/pipe-documentation';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipeComponent } from './credit-card-formatter-pipe/credit-card-formatter-pipe.component';


// routing
// truncate pipe
@NgModule({
  declarations: [
     PipeDocumentation,
     TruncatePipe,
     CreditCardFormatterPipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
