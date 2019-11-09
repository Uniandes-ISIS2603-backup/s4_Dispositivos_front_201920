import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoAddReviewComponent } from './dispositivo-add-review.component';

describe('DispositivoAddReviewComponent', () => {
  let component: DispositivoAddReviewComponent;
  let fixture: ComponentFixture<DispositivoAddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivoAddReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoAddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
