import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    BenefitsComponent,
    TechnologiesComponent,
    RegisterComponent,
    AboutComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
