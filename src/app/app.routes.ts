import { Routes } from '@angular/router';
import { DailyServiceRecord } from './daily-service-record/daily-service-record';
import { RabiesCase } from './rabies-case/rabies-case';
import { WaterAnalysis } from './water-analysis/water-analysis';

export const routes: Routes = [
  { path: 'daily-service-record', component: DailyServiceRecord },
  { path: 'rabies-case', component: RabiesCase },
  { path: 'water-analysis', component: WaterAnalysis }
];
