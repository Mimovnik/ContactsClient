import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactValidationErrorComponent } from './contact-validation-error.component';

describe('ContactValidationErrorComponent', () => {
  let component: ContactValidationErrorComponent;
  let fixture: ComponentFixture<ContactValidationErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactValidationErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactValidationErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
