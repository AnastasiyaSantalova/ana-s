import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { CommonButtonComponent } from './components/common-button/common-button.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

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
		CloseButtonComponent,
  SkillsPageComponent
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
