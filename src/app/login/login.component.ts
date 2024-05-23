import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '../error/error.component';
import { LoginCredentials } from '../models/login.credentials';
import { AuthService } from '../services/auth.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    ErrorComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  errorService: ErrorService = inject(ErrorService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  login(): void {
    this.errorService.clearErrors();

    let input: any = this.loginForm.value;

    if (input.password !== input.repeatPassword) {
      this.errorService.addError('Password', ['Passwords do not match']);
      return;
    }

    let loginRequest: LoginCredentials = {
      email: input.email,
      password: input.password,
    };

    this.authService.login(loginRequest);

  }
}
