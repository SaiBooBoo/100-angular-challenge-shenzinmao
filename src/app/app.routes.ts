import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./components/component-module').then((m) => m.ComponentsModule ) },
  { path: 'directives', loadChildren: () =>  import('./directive/directives-module').then((m) => m.DirectivesModule)},
  { path: 'pipes', loadChildren: () => import('./pipe/pipes-module').then((m) => m.PipesModule) },
  { path: 'services', loadChildren: () => import('./service/services-module').then((m) => m.ServicesModule) },
];
