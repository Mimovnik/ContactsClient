import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactComponent, CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];
  
  ngOnInit(): void {
    this.contacts = [
      {
        "id": "ebbca0e3-a021-47ab-814a-e40508a3647d",
        "firstName": "John",
        "lastName": "Cena",
        "email": "johncena@example.com",
        "password": "WhyIsTherePasswordFieldInContacts?",
        "category": "Private",
        "subcategory": "friend",
        "phoneNumber": "111222333",
        "birthDate": "1977-04-23"
      },
      {
        "id": "63d832c5-9288-424a-826d-b34d277fff8e",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "jane.doe@example.com",
        "password": "aslkdgj123?",
        "category": "Business",
        "subcategory": "client",
        "phoneNumber": "123789123",
        "birthDate": "2002-04-23"
      }
    ];
  }
}
