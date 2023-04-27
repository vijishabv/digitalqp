import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpviewComponent } from './qpview.component';

describe('QpviewComponent', () => {
  let component: QpviewComponent;
  let fixture: ComponentFixture<QpviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
