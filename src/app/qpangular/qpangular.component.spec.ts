import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpangularComponent } from './qpangular.component';

describe('QpangularComponent', () => {
  let component: QpangularComponent;
  let fixture: ComponentFixture<QpangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
