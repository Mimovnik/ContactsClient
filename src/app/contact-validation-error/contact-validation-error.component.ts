import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact-validation-error',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './contact-validation-error.component.html',
  styleUrl: './contact-validation-error.component.scss'
})
export class ContactValidationErrorComponent {
  @Input() errorTitle: string = 'Contact Validation Error';
  @Input() errorMessages: string[] = [];
}
