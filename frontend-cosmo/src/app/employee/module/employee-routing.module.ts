import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlFrontend } from 'src/app/shared/routes/RoutesFrontend';
import { IndexComponent } from '../components/index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: urlFrontend.employee.employeIndex,
        component: IndexComponent,
      },
      {
        path: '**',
        redirectTo: `${urlFrontend.employee.employeIndex}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
