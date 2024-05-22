import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { CreateContactComponent } from '../create-contact/create-contact.component';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactComponent, CommonModule, CreateContactComponent, HttpClientModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  httpClient: HttpClient = inject(HttpClient);
  contacts: any[] = [];
  host: string = 'https://localhost:7212/contacts';
  connectionError: any = null;
  validationErrors: any[] = [];

  ngOnInit(): void {
    this.fetchContacts();
  }

  private fetchContacts(): void {
    this.httpClient
      .get(this.host)
      .subscribe({
        next: (contacts: any) => {
          this.contacts = contacts;
          console.info("Contacts fetched successfully!");
        },
        error: (error: any) => {
          this.handleError(error);
        }
      });
  }

  private postContact(contact: any): void {
    this.validationErrors = [];
    this.httpClient
      .post(this.host, contact)
      .subscribe({
        next: () => {
          this.fetchContacts();
        },
        error: (error: any) => {
          this.handleError(error);
        }
      });
  }

  private deleteContact(id: string): void {
    this.httpClient
      .delete(`${this.host}/${id}`)
      .subscribe({
        next: () => {
          this.fetchContacts();
        },
        error: (error: any) => {
          this.handleError(error);
        }
      });
  }

  private handleError(error: any): void {
    console.info(error);
    if (error.status === 0) {
      this.connectionError = {};
      this.connectionError.message = 'Failed to connect to the server. Please check your connection and try again.'
    } else {
      const entries = Object.entries(error.error.errors);
      for (let [key, value] of entries) {
        this.validationErrors.push({ [key]: value });
      }
    }
  }

  removeContact(id: string): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.deleteContact(id);
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
    this.postContact(contact);
  }
}
