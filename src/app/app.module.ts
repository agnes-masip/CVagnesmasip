import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BackgroundDesignComponent } from './components/background-design/background-design.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    NavBarComponent,
    BackgroundDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
