import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiongenerationComponent } from './questiongeneration.component';

describe('QuestiongenerationComponent', () => {
  let component: QuestiongenerationComponent;
  let fixture: ComponentFixture<QuestiongenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiongenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestiongenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
