import { Injectable, signal } from "@angular/core";
import { ErrorInterface } from "../models/error.interface";

@Injectable({
    providedIn: 'root'
})

export class ErrorService {
    errors = signal<ErrorInterface[]>([]);

    clearErrors(): void {
        this.errors.set([]);
    }

    addError(title: string, messages: string[]): void {
        this.errors.update(values => [...values, { title: title, messages: messages }]);
    }

    handleError(error: any): void {
        console.info(error);
        if (error.status === 0) {
            let title: string = 'Connection Error';
            let message: string = 'Failed to connect to the server. Please check your connection and try again.'
            this.addError(title, [message]);
        } else if (error.status == 400) {
            const entries = Object.entries(error.error.errors);
            for (let [key, value] of entries) {
                this.addError(key, [JSON.stringify(value)]);
            }
        } else {
            this.addError(error.error.title, []);
        }
    }
}