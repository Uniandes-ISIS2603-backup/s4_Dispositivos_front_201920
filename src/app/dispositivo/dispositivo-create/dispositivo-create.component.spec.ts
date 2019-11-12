import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoCreateComponent } from './dispositivo-create.component';

describe('DispositivoCreateComponent', () => {
  let component: DispositivoCreateComponent;
  let fixture: ComponentFixture<DispositivoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
