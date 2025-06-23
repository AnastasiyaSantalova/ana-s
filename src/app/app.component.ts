import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemsService } from './services/menu-items.service';
import { MenuItem } from './types/types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	id: any | null;
	activeMenuItem: string;
  menuItems: MenuItem[];
  showHeaderBackground: boolean = false;

	constructor(private route: ActivatedRoute, private menuItemsService: MenuItemsService) {}

  getMenuItems() {
    this.menuItemsService.getAllMenuItems().subscribe(items => {
      this.menuItems = [...items];
    })
  }

	ngOnInit() {
    this.getMenuItems();

		this.id = this.route.fragment.subscribe(value => {
			this.activeMenuItem = value || 'home';
		});
	}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showHeaderBackground = window.scrollY > 10;

    for (const id of this.menuItems) {
      const page = document.getElementById(id);

      if (page) {
        const pageRect = page.getBoundingClientRect();

        if (pageRect.top <= 100 && pageRect.bottom > 100) {
          this.activeMenuItem = id;

          break;
        }
      }
    }
  }
}
