import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projetos/:slug',
    loadComponent: () =>
      import('./pages/project-page-wrapper/project-page-wrapper.component').then((m) => m.ProjectPageWrapperComponent),
  }
];
