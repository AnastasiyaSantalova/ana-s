import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() activeItem: string;
	@Output() activeItemChange = new EventEmitter<string>();

	menuItems = ['home', 'portfolio', 'skills', 'contacts'];

	setNewActiveItem(value: string) {
		this.activeItem = value;
    const elementToScroll = document.getElementById(value);

    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

		this.activeItemChange.emit(this.activeItem);
	}
}
