import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.route';

import {MatTableModule} from '@angular/material/table'


@NgModule({
  declarations: [
   WelcomeComponent
  ],
  imports: [
   WelcomeRoutingModule,
   CommonModule,
   MatTableModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
