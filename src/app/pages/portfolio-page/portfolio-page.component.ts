import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { PortfolioItem } from 'src/app/types/types';

@Component({
	selector: 'app-portfolio-page',
	templateUrl: './portfolio-page.component.html',
	styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
	portfolioItems: PortfolioItem[] = [];
	isModalDialgOpen: boolean = false;
	currentItem: PortfolioItem;

	constructor(private portfolioService: PortfolioService) {}

	ngOnInit(): void {
		this.getPortfolioItems();
	}

	getPortfolioItems(): void {
		this.portfolioService.getPortfolioItems().subscribe(items => {
      this.portfolioItems = [...items];
    });
	}

	onItemClick(item: any) {
		this.currentItem = item;
		this.isModalDialgOpen = true;
	}

	onCloseModalClick() {
		this.isModalDialgOpen = false;
	}
}
