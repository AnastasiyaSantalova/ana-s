import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioItem } from 'src/app/types/types';

@Component({
	selector: 'app-modal-dialog',
	templateUrl: './modal-dialog.component.html',
	styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
	@Input() isModalVisible: boolean = true;
	@Input() item: PortfolioItem;
	@Output() onCloseClick = new EventEmitter();

	onCloseButtonClick() {
		this.onCloseClick.emit();
	}
}
