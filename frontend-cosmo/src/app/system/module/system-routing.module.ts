import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlFrontend } from 'src/app/shared/routes/RoutesFrontend';
import { IndexComponent } from '../components/index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: urlFrontend.system.systemIndex,
        component: IndexComponent,
      },
      {
        path: '**',
        redirectTo: `${urlFrontend.system.systemIndex}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
