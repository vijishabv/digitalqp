import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpviewcssComponent } from './qpviewcss.component';

describe('QpviewcssComponent', () => {
  let component: QpviewcssComponent;
  let fixture: ComponentFixture<QpviewcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpviewcssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpviewcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
