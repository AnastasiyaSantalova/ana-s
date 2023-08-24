import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-close-button',
	templateUrl: './close-button.component.html',
	styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {
	@Output() onCloseClick = new EventEmitter();

	onClick() {
		this.onCloseClick.emit();
	}
}
