import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleGrayscaleComponent } from './slide-toggle-grayscale.component';

describe('SlideToggleGrayscaleComponent', () => {
  let component: SlideToggleGrayscaleComponent;
  let fixture: ComponentFixture<SlideToggleGrayscaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideToggleGrayscaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideToggleGrayscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
