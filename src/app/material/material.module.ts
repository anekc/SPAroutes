import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [],
  imports: [ MatSidenavModule,  MatToolbarModule , MatCardModule, MatGridListModule
    , MatIconModule, MatButtonModule, MatListModule, MatProgressSpinnerModule
  ],
  exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule, MatProgressSpinnerModule,
    MatGridListModule]
})
export class MaterialModule { }
