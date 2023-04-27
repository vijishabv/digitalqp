import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpviewhtmlComponent } from './qpviewhtml.component';

describe('QpviewhtmlComponent', () => {
  let component: QpviewhtmlComponent;
  let fixture: ComponentFixture<QpviewhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpviewhtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpviewhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
