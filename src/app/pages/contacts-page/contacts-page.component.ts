import { Component } from '@angular/core';

@Component({
	selector: 'app-contacts-page',
	templateUrl: './contacts-page.component.html',
	styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent {
  protected socialButtons = [
    {
      icon: 'email',
      link: 'mailto:anastazy.santa@gmail.com',
    },
    {
      icon: 'github',
      link: 'https://github.com/AnastasiyaSantalova',
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/anastasiia-s-53a2191ab/',
    },
  ];

  onSocialButtonClick(url: string) {
    window.open(url, '_blank');
  }
}
