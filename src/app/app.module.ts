import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatSelectModule} from '@angular/material/select'
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyappComponentComponent } from './myapp-component/myapp-component.component';
import { ContentComponent } from './content/content.component';
import { StoreModule } from '@ngrx/store';
import {reducer} from './app.reducer';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableListComponent } from './table-list/table-list.component';
import { ToGetData } from './app.effects';
import { EffectsModule } from '@ngrx/effects';
import { CurComponent } from './table-list/cur.component';
import { ImgComponent } from './table-list/img.component';

@NgModule({
  declarations: [
    MyappComponentComponent,
    ContentComponent,
    DropdownComponent,
    TableListComponent,
    ImgComponent,
    CurComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    StoreModule.forRoot({regions: reducer}),
    EffectsModule.forRoot([ToGetData])
  ],
  providers: [],
  bootstrap: [MyappComponentComponent]
})
export class AppModule { }
