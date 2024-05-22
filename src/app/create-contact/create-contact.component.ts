import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContactValidationErrorComponent } from '../contact-validation-error/contact-validation-error.component';
import { ContactsComponent } from '../contacts/contacts.component';


@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ContactValidationErrorComponent,
    CommonModule,
  ],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.scss'
})
export class CreateContactComponent {
  @Input() validationErrors: any[] = [];
  expanded: boolean = false;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  category: string = '';
  subcategory: string = '';
  phoneNumber: string = '';
  birthDate: string = '';

  contacts: ContactsComponent = inject(ContactsComponent);

  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    category: new FormControl(''),
    subcategory: new FormControl(''),
    phoneNumber: new FormControl(''),
    birthDate: new FormControl(''),
  });

  createContact(): void {
    let input: any = this.contactForm.value;

    this.contacts.addContact(
      input.firstName,
      input.lastName,
      input.email,
      input.password,
      input.category,
      input.subcategory,
      input.phoneNumber,
      input.birthDate
    );
  }
}
