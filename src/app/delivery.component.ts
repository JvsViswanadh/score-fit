import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  standalone: true,
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent {
  constructor(private router: Router) {}

  subscribe(): void {
    this.router.navigate(['/subscribe']);
  }

  addCoverLetter(): void {
    this.router.navigate(['/checkout'], { queryParams: { coverLetter: true } });
  }

  addInterviewPrep(): void {
    this.router.navigate(['/checkout'], { queryParams: { interviewPrep: true } });
  }
}
