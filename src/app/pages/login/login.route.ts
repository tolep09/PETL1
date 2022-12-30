import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoute: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            pageTitle: 'Login'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoute)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
