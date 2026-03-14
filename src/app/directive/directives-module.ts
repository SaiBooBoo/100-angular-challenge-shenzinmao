import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentation } from './directive-documentation/directive-documentation';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES } from './directive.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectiveDocumentation,
    RouterModule.forChild(DIRECTIVE_ROUTES)
  ]
})
export class DirectivesModule { }
