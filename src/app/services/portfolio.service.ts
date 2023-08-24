import { Injectable } from '@angular/core';
import { PortfolioItem } from '../types/types';
import { PORTFOLIO_ITEMS } from 'src/assets/mocked/portfolio-items';

@Injectable({
	providedIn: 'root'
})
export class PortfolioService {
	getPortfolioItems(): PortfolioItem[] {
		return PORTFOLIO_ITEMS;
	}
}
