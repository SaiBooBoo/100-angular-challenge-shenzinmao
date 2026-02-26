import { Routes } from '@angular/router';

import { ToolbarComponent  } from './toolbar/toolbar.component';

export const routes: Routes = [
  { path: '', component: ToolbarComponent },
  { path: '**', redirectTo: '' }
];
