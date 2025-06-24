import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  protected isImageExpanded: boolean = false;

	onCloseButtonClick() {
		this.onCloseClick.emit();
	}

  onImageClick() {
    this.isImageExpanded = !this.isImageExpanded;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    this.onCloseClick.emit();
  }
}
