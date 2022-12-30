import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { InputDataComponentComponent } from './input-data-component.component';


@NgModule({
  declarations: [
    InputDataComponentComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputDataComponentComponent]
})
export class InputDataComponentModule { }
