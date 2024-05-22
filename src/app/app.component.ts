import { Component } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactsComponent, MatSidenavContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ContactsClient';
}
