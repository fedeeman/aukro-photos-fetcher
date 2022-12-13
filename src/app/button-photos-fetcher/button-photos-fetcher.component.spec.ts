import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPhotosFetcherComponent } from './button-photos-fetcher.component';

describe('ButtonPhotosFetcherComponent', () => {
  let component: ButtonPhotosFetcherComponent;
  let fixture: ComponentFixture<ButtonPhotosFetcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPhotosFetcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPhotosFetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
