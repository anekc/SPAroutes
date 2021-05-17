import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import  {MatSnackBarModule} from '@angular/material/snack-bar'
import  {MatDialogModule} from '@angular/material/dialog'
@NgModule({
  declarations: [],
  imports: [ MatSidenavModule,  MatToolbarModule , MatCardModule, MatGridListModule
    , MatIconModule, MatButtonModule, MatListModule, MatProgressSpinnerModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
     MatSelectModule,MatSnackBarModule,MatDialogModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule, MatProgressSpinnerModule,
    MatGridListModule,MatSelectModule, MatAutocompleteModule , MatFormFieldModule , MatInputModule, MatSnackBarModule, MatDialogModule]
})
export class MaterialModule { }
