import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypes } from 'src/app/types/types';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class CommonButtonComponent {
	@Input() name?: string = '';
  @Input() type?: ButtonTypes = 'cta';
  @Input() icon?: string = '';
  @Input() disabled?: boolean = false;
  @Output() onButtonClick = new EventEmitter();

	onClick(event: Event) {
    event.stopPropagation();
    event.preventDefault();

		this.onButtonClick.emit();
	}

  constructor(private elem: ElementRef) {}

  ngAfterViewInit() {
    if (this.icon) {
      const target = this.elem.nativeElement.querySelector('.icon-only, .icon');

      if (target) {
        target.style.maskImage = `url('/assets/icons/${this.icon}.svg')`;
      }
    }
  }
}
