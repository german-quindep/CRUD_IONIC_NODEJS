import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { urlFrontend } from './shared/routes/RoutesFrontend';
import { SystemGuard } from './guards/system.guard';

const routes: Routes = [
  {
    path: urlFrontend.login.module,
    loadChildren: () =>
      import('./login/module/login.module').then((m) => m.LoginModule),
  },
  {
    path: urlFrontend.system.module,
    canActivate: [SystemGuard],
    loadChildren: () =>
      import('./system/module/system.module').then((m) => m.SystemModule),
  },
  {
    path: urlFrontend.person.module,
    canActivate: [SystemGuard],
    loadChildren: () =>
      import('./person/module/person.module').then((m) => m.PersonModule),
  },
  {
    path: urlFrontend.employee.module,
    canActivate: [SystemGuard],
    loadChildren: () =>
      import('./employee/module/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: '',
    redirectTo: `${urlFrontend.login.module}`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
