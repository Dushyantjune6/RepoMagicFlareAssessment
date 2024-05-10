import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { TopComponentComponent } from './top-component/top-component.component';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';
import { ShiftSelectionNavBarComponent } from './shift-selection-nav-bar/shift-selection-nav-bar.component';
import { DataDisplayGridComponent } from './data-display-grid/data-display-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponentComponent,
    ToggleMenuComponent,
    ShiftSelectionNavBarComponent,
    DataDisplayGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
