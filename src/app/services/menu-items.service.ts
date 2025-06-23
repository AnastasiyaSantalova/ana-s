import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MENU } from 'src/assets/mocked/menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  getAllMenuItems() {
    const menuItems = of(MENU);

    return menuItems;
  }
}
