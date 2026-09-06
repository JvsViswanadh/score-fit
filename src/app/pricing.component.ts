import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  constructor(private router: Router) {}

  subscribe(): void {
    this.router.navigate(['/subscribe']);
  }

  chooseSingle(): void {
    this.router.navigate(['/score-result']);
  }
}
