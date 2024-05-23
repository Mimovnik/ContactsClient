import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable, OnInit, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { LoginCredentials } from "../models/login.credentials";
import { RegisterCredentials } from "../models/register.credentials";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {
    currentUser$ = signal<User | undefined | null>(undefined)
    http: HttpClient = inject(HttpClient);
    url: string = 'https://localhost:7212';
    router: Router = inject(Router);
    errorHandler: ErrorHandler = inject(ErrorHandler);

    ngOnInit(): void {
        this.http
            .get(this.url)
    }

    register(request: RegisterCredentials): void {
        this.http
            .post<User>(`${this.url}/auth/register`, request)
            .subscribe({
                next: (user: User) => {
                    console.info("User registered successfully!");
                    localStorage.setItem('token', user.token);
                    this.currentUser$.set(user);
                    this.router.navigateByUrl('/');
                },
                error: (error: any) => {
                    this.errorHandler.handleError(error);
                }
            });
    }

    login(request: LoginCredentials): void {
        this.http
            .post<User>(`${this.url}/auth/login`, request)
            .subscribe({
                next: (user: User) => {
                    console.info("User logged in successfully!");
                    localStorage.setItem('token', user.token);
                    this.currentUser$.set(user);
                    this.router.navigateByUrl('/');
                },
                error: (error: any) => {
                    this.errorHandler.handleError(error);
                }
            });
    }

    authenticate(): void {
        this.http
            .get<User>(`${this.url}/auth`)
            .subscribe({
                next: (user: User) => {
                    console.info("User authenticated successfully!");
                    this.currentUser$.set(user);
                },
                error: (error: any) => {
                    this.currentUser$.set(null);
                }
            });
    }

    logout(): void {
        localStorage.removeItem('token');
        this.currentUser$.set(null);
    }
}