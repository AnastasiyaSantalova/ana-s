import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	id: any | null;
	activeMenuItem: string;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.id = this.route.fragment.subscribe(value => {
			this.activeMenuItem = value || 'home';
		});
	}
}
