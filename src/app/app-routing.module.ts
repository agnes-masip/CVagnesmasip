import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProgLangComponent } from './components/prog-lang/prog-lang.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'studies', component: StudiesComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'aboutMe', component: AboutMeComponent},
  {path:'coding', component: ProgLangComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
