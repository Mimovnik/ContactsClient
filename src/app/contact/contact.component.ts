import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatExpansionModule, MatCardModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  @Input() contact: any;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  category: string = '';
  subcategory: string = '';
  phoneNumber: string = '';
  birthDate: string = '';

  ngOnInit(): void {
    this.firstName = this.contact.firstName;
    this.lastName = this.contact.lastName;
    this.email = this.contact.email;
    this.password = this.contact.password;
    this.category = this.contact.category;
    this.subcategory = this.contact.subcategory;
    this.phoneNumber = this.contact.phoneNumber;
    this.birthDate = this.contact.birthDate;
  }
}
