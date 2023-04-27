import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpviewangularComponent } from './qpviewangular.component';

describe('QpviewangularComponent', () => {
  let component: QpviewangularComponent;
  let fixture: ComponentFixture<QpviewangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpviewangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpviewangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
