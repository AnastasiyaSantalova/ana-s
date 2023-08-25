import { Injectable } from '@angular/core';
import { PortfolioItem } from '../types/types';
import { PORTFOLIO_ITEMS } from 'src/assets/mocked/portfolio-items';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PortfolioService {
	getPortfolioItems(): Observable<PortfolioItem[]> {
        const portfolioItems = of(PORTFOLIO_ITEMS);

		return portfolioItems;
	}
}
