import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ContactViewComponent } from '../contact-view/contact-view.component';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { ErrorComponent } from '../error/error.component';
import { AuthService } from '../services/auth.service';
import { ContactsService } from '../services/contacts.service';
import { ErrorService } from '../services/error.service';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    ContactViewComponent,
    CommonModule,
    CreateContactComponent,
    ErrorComponent,
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  contactsService: ContactsService = inject(ContactsService);
  errorService: ErrorService = inject(ErrorService);

  ngOnInit(): void {
    this.errorService.clearErrors();
    this.contactsService.fetchContacts();
  }

  removeContact(id: string): void {
    this.errorService.clearErrors();
    this.contactsService.deleteContact(id);
  }

  addContact(firstName: string,
    lastName: string,
    email: string,
    password: string,
    category: string,
    subcategory: string,
    phoneNumber: string,
    birthDate: string
  ): void {
    this.errorService.clearErrors();
    let contact: any = {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      email: email ?? '',
      password: password ?? '',
      category: category ?? '',
      subcategory: subcategory ?? '',
      phoneNumber: phoneNumber ?? '',
      birthDate: birthDate ?? '',
    };
    this.contactsService.postContact(contact);
  }
}
