import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PortfolioItem } from 'src/app/types/types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  @Input() portfolioItems: PortfolioItem[];
  @Output() onItemClick = new EventEmitter();

  onCarouselItemClick(event: Event, item: PortfolioItem) {
    event.stopPropagation();
    event.preventDefault();

		this.onItemClick.emit(item);
	}

  scrollCarousel(direction: 'left' | 'right') {
    const container = this.carousel.nativeElement as HTMLElement;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }

  ngAfterViewInit() {
    const container = this.carousel.nativeElement as HTMLElement;

    container.addEventListener('wheel', (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        container.scrollBy({
          left: event.deltaY,
          behavior: 'smooth'
        });
      }
    }, { passive: false });
  }
}
