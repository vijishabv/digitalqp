import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpjsComponent } from './qpjs.component';

describe('QpjsComponent', () => {
  let component: QpjsComponent;
  let fixture: ComponentFixture<QpjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
