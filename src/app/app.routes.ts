import { Routes } from '@angular/router';

import { DayComponent } from './pages/day/day.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'day/:day', component: DayComponent },
  { path: '**', redirectTo: '' }
];
