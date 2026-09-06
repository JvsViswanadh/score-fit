import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
