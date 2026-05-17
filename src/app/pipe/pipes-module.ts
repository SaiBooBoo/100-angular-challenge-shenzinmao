import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentation } from './pipe-documentation/pipe-documentation';
import { RouterModule } from '@angular/router';
import { PIPES_ROUTES } from './pipes.routes';
import { TruncatePipe } from './truncate/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { CreditCardFormatterPipeComponent } from './credit-card-formatter-pipe/credit-card-formatter-pipe.component';
import { FlattenPipeModule } from './flatten.pipe/flatten.pipe.module';
import { FilerTermPipe } from './flatten.pipe/filer-term.pipe';


// routing
// truncate pipe
@NgModule({
  declarations: [
     PipeDocumentation,
     TruncatePipe,
     CreditCardFormatterPipeComponent,
     FlattenPipeModule,
     FilerTermPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(PIPES_ROUTES)
  ]
})
export class PipesModule { }
