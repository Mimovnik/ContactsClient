import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ContactsComponent, MatSidenavContainer, NavbarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Contacts';
  authService: AuthService = inject(AuthService);

  ngOnInit(): void {
    this.authService.authenticate();
  }
}
