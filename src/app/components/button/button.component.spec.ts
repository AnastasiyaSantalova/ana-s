import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonButtonComponent } from './button.component';

describe('CommonButtonComponent', () => {
	let component: CommonButtonComponent;
	let fixture: ComponentFixture<CommonButtonComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CommonButtonComponent]
		});
		fixture = TestBed.createComponent(CommonButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
