import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { CheckoutComponent } from './checkout.component';
import { DeliveryComponent } from './delivery.component';
import { SampleReportComponent } from './sample-report.component';
import { ScoreResultComponent } from './score-result.component';
import { SubscribeComponent } from './subscribe.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'score-result', component: ScoreResultComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'sample-report', component: SampleReportComponent },
  { path: 'subscribe', component: SubscribeComponent }
];
