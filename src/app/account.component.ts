import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor(private router: Router) {}

  startTailoring(): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => document.getElementById('analyze')?.scrollIntoView({ behavior: 'smooth' }), 0);
    });
  }
}
