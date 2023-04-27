import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpcssComponent } from './qpcss.component';

describe('QpcssComponent', () => {
  let component: QpcssComponent;
  let fixture: ComponentFixture<QpcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpcssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
