import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpviewjsComponent } from './qpviewjs.component';

describe('QpviewjsComponent', () => {
  let component: QpviewjsComponent;
  let fixture: ComponentFixture<QpviewjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpviewjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpviewjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
