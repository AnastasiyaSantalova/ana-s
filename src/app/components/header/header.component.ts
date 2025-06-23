import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItemsService } from 'src/app/services/menu-items.service';
import { MenuItem } from 'src/app/types/types';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() activeItem: string;
	@Output() activeItemChange = new EventEmitter<string>();

	menuItems: MenuItem[];

  constructor(private menuItemsService: MenuItemsService) {}

  getMenuItems() {
    this.menuItemsService.getAllMenuItems().subscribe(items => {
      this.menuItems = [...items];
    })
  }

  ngOnInit() {
    this.getMenuItems();
  }

	setNewActiveItem(value: string) {
		this.activeItem = value;
    const elementToScroll = document.getElementById(value);

    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

		this.activeItemChange.emit(this.activeItem);
	}
}
