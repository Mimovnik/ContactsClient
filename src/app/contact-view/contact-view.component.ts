import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContactsComponent } from '../contacts/contacts.component';
import { AuthService } from '../services/auth.service';
;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss'
})
export class ContactViewComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  @Input() contact: any;
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  category: string = '';
  subcategory: string = '';
  phoneNumber: string = '';
  birthDate: string = '';

  contacts: ContactsComponent = inject(ContactsComponent);

  ngOnInit(): void {
    this.id = this.contact.id;
    this.firstName = this.contact.firstName;
    this.lastName = this.contact.lastName;
    this.email = this.contact.email;
    this.password = this.contact.password;
    this.category = this.contact.category;
    this.subcategory = this.contact.subcategory;
    this.phoneNumber = this.contact.phoneNumber;
    this.birthDate = this.contact.birthDate;
  }

  remove(): void {
    this.contacts.removeContact(this.id);
  }
}
