import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BackgroundDesignComponent } from './components/background-design/background-design.component';
import { HomeComponent } from './components/home/home.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    NavBarComponent,
    BackgroundDesignComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'/studies', component: StudiesComponent},
      {path:'/projects', component: ProjectsComponent},
      {path:'/aboutMe', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
