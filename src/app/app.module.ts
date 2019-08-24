import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SideNavComponent, CompanyDataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
