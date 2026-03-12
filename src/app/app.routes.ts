import { Routes } from '@angular/router';

import { ToolbarComponent  } from './toolbar/toolbar.component';
import { Component } from '@angular/compiler';
import { ComponentDocumentation } from './components/component-documentation/component-documentation';
import { DirectiveDocumentation } from './directive/directive-documentation/directive-documentation';
import { PipeDocumentation } from './pipe/pipe-documentation/pipe-documentation';
import { ServiceDocumentation } from './service/service-documentation/service-documentation';


export const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentation },
  { path: 'directives', component: DirectiveDocumentation },
  { path: 'pipes', loadChildren: () => import('./pipe/pipes-module').then((m) => m.PipesModule) },
  { path: 'services', component: ServiceDocumentation },
];

// day 11
