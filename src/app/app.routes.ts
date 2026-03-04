import { Routes } from '@angular/router';

import { ToolbarComponent  } from './toolbar/toolbar.component';
import { Component } from '@angular/compiler';
import { ComponentDocumentation } from './components/component-documentation/component-documentation';

export const APP_ROUTES: Routes = [
  { path: '', component: ComponentDocumentation },
];

