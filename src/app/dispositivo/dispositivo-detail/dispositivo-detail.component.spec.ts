import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoDetailComponent } from './dispositivo-detail.component';

describe('DispositivoDetailComponent', () => {
  let component: DispositivoDetailComponent;
  let fixture: ComponentFixture<DispositivoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
