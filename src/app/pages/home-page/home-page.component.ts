import { Component } from '@angular/core';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  resumeUrl: string = 'https://anas-b1197.web.app/AnastasiiaSantalova_CV.pdf';

  onResumeClick(): void {
    window.open(this.resumeUrl, '_blank');
  }
}
