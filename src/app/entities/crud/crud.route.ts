import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';

const crudRoute: Routes = [
    {
        path: '',
        component: CrudComponent,
        data: {
            pageTitle: 'Welcome'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(crudRoute)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
