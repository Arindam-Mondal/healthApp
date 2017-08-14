import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFoodComponent } from './single-food.component';

describe('SingleFoodComponent', () => {
  let component: SingleFoodComponent;
  let fixture: ComponentFixture<SingleFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
