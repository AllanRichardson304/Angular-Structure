import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
        import('./authentication/authentication.module').then(
            mod => mod.AuthenticationModule
        )
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((mod) => mod.PagesModule),
      component:LayoutsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
