import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud.route';
import { CrudViewComponent } from './crud-view.component';
import { CrudUpdateComponent } from './crud-update.component';
import { InputDataComponentModule } from '../../shared/input-data-component/input-data-component.module';

import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
   CrudComponent,
   CrudViewComponent,
   CrudUpdateComponent
  ],
  imports: [
   CrudRoutingModule,
   FormsModule,
   MatIconModule,
   MatDialogModule,
   MatCardModule,
   MatInputModule,
   MatButtonModule,
   MatFormFieldModule,
   MatListModule,
   MatTableModule,
   MatSortModule,
   MatToolbarModule,
   MatMenuModule,
   MatTableModule,
   InputDataComponentModule,
   FlexLayoutModule
  ],
  providers: [
    //{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class CrudModule { }
