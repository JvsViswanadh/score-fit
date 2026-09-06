import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AnalyzeComponent } from './analyze.component';
import { CheckoutComponent } from './checkout.component';
import { DeliveryComponent } from './delivery.component';
import { HomeComponent } from './home.component';
import { HowItWorksComponent } from './how-it-works.component';
import { PricingComponent } from './pricing.component';
import { SampleReportComponent } from './sample-report.component';
import { ScoreResultComponent } from './score-result.component';
import { SubscribeComponent } from './subscribe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'score-result', component: ScoreResultComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'sample-report', component: SampleReportComponent },
  { path: 'subscribe', component: SubscribeComponent }
];
