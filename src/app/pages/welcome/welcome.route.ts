import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const welcomeRoute: Routes = [
    {
        path: '',
        component: WelcomeComponent,
        data: {
            pageTitle: 'Welcome'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(welcomeRoute)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
