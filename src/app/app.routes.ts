import { Routes } from '@angular/router';

import { ToolbarComponent  } from './toolbar/toolbar.component';
import { Component } from '@angular/compiler';
import { ComponentDocumentation } from './components/component-documentation/component-documentation';
import { DirectiveDocumentation } from './directive/directive-documentation/directive-documentation';
import { PipeDocumentation } from './pipe/pipe-documentation/pipe-documentation';
import { ServiceDocumentation } from './service/services/service-documentation/service-documentation';


export const APP_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./components/component-module').then((m) => m.ComponentsModule ) },
  { path: 'directives', loadChildren: () =>  import('./directive/directives-module').then((m) => m.DirectivesModule)},
  { path: 'pipes', loadChildren: () => import('./pipe/pipes-module').then((m) => m.PipesModule) },
  { path: 'services', loadChildren: () => import('./service/services-module').then((m) => m.ServicesModule) },
];
