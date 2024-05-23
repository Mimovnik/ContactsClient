import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { Contact } from "../models/contact";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    url: string = 'https://localhost:7212';
    http: HttpClient = inject(HttpClient);
    contacts$ = signal<Contact[] | null | undefined>(undefined)
    errorService: ErrorService = inject(ErrorService);

    fetchContacts(): void {
        console.log("Fetching contacts...")
        this.http
            .get(`${this.url}/contacts`)
            .subscribe({
                next: (contacts: any) => {
                    this.contacts$.set(contacts);
                    console.info("Contacts fetched successfully!");
                },
                error: (error: any) => {
                    console.log("Error fetching contacts...")
                    console.log(error);
                    this.errorService.handleError(error);
                    this.contacts$.set(null);
                }
            });
    }

    postContact(contact: Contact): void {
        this.http
            .post(`${this.url}/contacts`, contact)
            .subscribe({
                next: () => {
                    this.fetchContacts();
                },
                error: (error: any) => {
                    this.errorService.handleError(error);
                }
            });
    }

    deleteContact(id: string): void {
        this.http
            .delete(`${this.url}/contacts/${id}`)
            .subscribe({
                next: () => {
                    this.fetchContacts();
                },
                error: (error: any) => {
                    this.errorService.handleError(error);
                }
            });
    }

}