import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Patients } from './pages/patients/patients';
import { Beds } from './pages/beds/beds';
import { Stock } from './pages/stock/stock';
import { Doctors } from './pages/doctors/doctors';
import { AiAlerts } from './pages/ai-center/ai-center';
import { Tests } from './pages/tests/tests';
import { DistrictMap } from './pages/district-map/district-map';
import { Reports } from './pages/reports/reports';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'dashboard', component: Dashboard },

  { path: 'patients', component: Patients },

  { path: 'beds', component: Beds },

  { path: 'stock', component: Stock },

  { path: 'tests', component: Tests },

  { path: 'doctors', component: Doctors },

  { path: 'ai', component: AiAlerts },

  { path: 'district-map', component: DistrictMap },

  { path: 'reports', component: Reports }
];