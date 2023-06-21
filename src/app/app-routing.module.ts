import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RegisterComponent } from './register/register.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: BenefitsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
