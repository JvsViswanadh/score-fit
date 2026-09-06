import { Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { ScoreResultComponent } from './score-result.component';

export const routes: Routes = [
  { path: 'score-result', component: ScoreResultComponent },
  { path: 'delivery', component: DeliveryComponent }
];
