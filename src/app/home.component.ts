import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  inputMode: 'url' | 'text' = 'url';

  constructor(private router: Router) {}

  goToScoreResult(): void {
    this.router.navigate(['/score-result']);
  }

  goToSubscribe(): void {
    this.router.navigate(['/subscribe']);
  }

  goToSampleReport(): void {
    this.router.navigate(['/sample-report']);
  }
}
