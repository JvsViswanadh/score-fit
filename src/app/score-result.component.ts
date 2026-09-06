import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-result',
  standalone: true,
  templateUrl: './score-result.component.html',
  styleUrl: './score-result.component.scss'
})
export class ScoreResultComponent {
  constructor(private router: Router) {}

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
