import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Input() errorTitle: string = 'Error';
  @Input() errorMessages: string[] = [];
}
