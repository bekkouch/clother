import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSliderComponent } from './fit-slider.component';

describe('FitSliderComponent', () => {
  let component: FitSliderComponent;
  let fixture: ComponentFixture<FitSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
