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

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import { ArrowComponent } from './arrow/arrow.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './technologies/carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';

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
    ButtonComponent,
    SidenavComponent,
    ArrowComponent,
    CardComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
