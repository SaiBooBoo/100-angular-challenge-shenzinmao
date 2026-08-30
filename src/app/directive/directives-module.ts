import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentation } from './directive-documentation/directive-documentation';
import { RouterModule } from '@angular/router';
import { DIRECTIVE_ROUTES } from './directive.routes';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';
import { RippleDirective } from './ripple-directive/ripple.directive.directive';

@NgModule({
  declarations: [
    DirectiveDocumentation,
    DebounceClickDirective,
    RippleDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVE_ROUTES),
     SharedModule,

  ]
})
export class DirectivesModule {}
