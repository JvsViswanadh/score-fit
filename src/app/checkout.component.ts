import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  quickFix = false;
  includeCoverLetter = false;
  includeInterviewPrep = false;
  paymentMethod: 'upi' | 'card' | 'netbanking' = 'upi';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParamMap.subscribe(params => {
      this.quickFix = params.get('quickFix') === 'true';
      this.includeCoverLetter = !this.quickFix && params.get('coverLetter') === 'true';
      this.includeInterviewPrep = !this.quickFix && params.get('interviewPrep') === 'true';
    });
  }

  pay(): void {
    this.router.navigate(['/delivery']);
  }

  get total(): number {
    return (this.quickFix ? 149 : 749) + (this.includeCoverLetter ? 250 : 0) + (this.includeInterviewPrep ? 350 : 0);
  }
}
