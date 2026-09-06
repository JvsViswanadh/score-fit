import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze',
  standalone: true,
  templateUrl: './analyze.component.html',
  styleUrl: './analyze.component.scss'
})
export class AnalyzeComponent {
  inputMode: 'url' | 'text' = 'url';

  constructor(private router: Router) {}

  getScore(): void {
    this.router.navigate(['/score-result']);
  }
}
