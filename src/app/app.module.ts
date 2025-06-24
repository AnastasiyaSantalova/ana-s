import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { CommonButtonComponent } from './components/button/button.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
	{ path: 'home', component: HomePageComponent },
	{ path: 'portfolio', component: PortfolioPageComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
    	PortfolioPageComponent,
		HeaderComponent,
		CommonButtonComponent,
		ModalDialogComponent,
  SkillsPageComponent,
  ContactsPageComponent,
  FooterComponent,
  CarouselComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
