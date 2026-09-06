import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample-report',
  standalone: true,
  templateUrl: './sample-report.component.html',
  styleUrl: './sample-report.component.scss'
})
export class SampleReportComponent {
  constructor(private router: Router) {}

  tryItYourself(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' }), 0);
    });
  }
}
