import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogComponent } from './modal-dialog.component';

describe('ModalDialogComponent', () => {
	let component: ModalDialogComponent;
	let fixture: ComponentFixture<ModalDialogComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ModalDialogComponent]
		});
		fixture = TestBed.createComponent(ModalDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
