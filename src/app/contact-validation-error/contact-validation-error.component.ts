import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact-validation-error',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './contact-validation-error.component.html',
  styleUrl: './contact-validation-error.component.scss'
})
export class ContactValidationErrorComponent implements OnInit {
  @Input() error: any = null;
  fieldName: string = 'Contact Validation Error';
  messages: string[] = [];

  ngOnInit(): void {
    this.fieldName = Object.keys(this.error)[0];
    const key = Object.keys(this.error)[0];
    for (let message of this.error[key]) {
      this.messages.push(message);
    }
  }
}
