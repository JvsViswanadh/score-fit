import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { DeliveryComponent } from './delivery.component';
import { ScoreResultComponent } from './score-result.component';

export const routes: Routes = [
  { path: 'score-result', component: ScoreResultComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'checkout', component: CheckoutComponent }
];
