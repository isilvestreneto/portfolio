import { Routes } from '@angular/router';
import { ProjectPageWrapperComponent } from './pages/project-page-wrapper/project-page-wrapper.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projetos/:slug',
    component: ProjectPageWrapperComponent,
  }
];
