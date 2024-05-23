import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '../error/error.component';
import { RegisterCredentials } from '../models/register.credentials';
import { AuthService } from '../services/auth.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-register',
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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService: AuthService = inject(AuthService);
  errorService: ErrorService = inject(ErrorService);

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });

  register(): void {
    let input: any = this.registerForm.value;

    this.errorService.clearErrors();

    if (input.password !== input.repeatPassword) {
      this.errorService.addError('Password', ['Passwords do not match']);
      return;
    }

    let registerRequest: RegisterCredentials = {
      username: input.username,
      email: input.email,
      password: input.password,
    };

    this.authService.register(registerRequest);
  }
}

