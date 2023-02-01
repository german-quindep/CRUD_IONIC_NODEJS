import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlFrontend } from 'src/app/shared/routes/RoutesFrontend';
import { LoginComponent } from '../components/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: urlFrontend.login.login,
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: `${urlFrontend.login.login}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
