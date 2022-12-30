import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.route';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
   LoginRoutingModule,
   FormsModule,
   MatSnackBarModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
