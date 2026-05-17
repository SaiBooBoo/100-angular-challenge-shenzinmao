import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentation } from './directive-documentation/directive-documentation';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES } from './directive.routes';
import { Card } from '../card/card';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DirectiveDocumentation,
    DebounceClickDirective

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVE_ROUTES),
     SharedModule,

  ]
})
export class DirectivesModule {}
