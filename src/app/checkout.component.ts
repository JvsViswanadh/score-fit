import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  includeCoverLetter = false;
  includeInterviewPrep = false;
  paymentMethod: 'upi' | 'card' | 'netbanking' = 'upi';

  get total(): number {
    return 749 + (this.includeCoverLetter ? 250 : 0) + (this.includeInterviewPrep ? 350 : 0);
  }
}
