import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { CreateContactComponent } from '../create-contact/create-contact.component';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactComponent, CommonModule, CreateContactComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];
  
  ngOnInit(): void {
    this.loadContacts();
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
    this.contacts.push(contact);
    this.saveContacts();
  }

  removeContact(index: number): void{
    this.contacts.splice(index, 1);
    this.saveContacts();
  }

  saveContacts(): void {
    let data = JSON.stringify(this.contacts);
    localStorage.setItem('contacts', data);
  }

  loadContacts(): void {
    let data = localStorage.getItem('contacts');
    if (data) {
      this.contacts = JSON.parse(data);
    }
  }
}
