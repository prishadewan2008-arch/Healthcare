import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Stock } from './pages/stock/stock';
import { Patients } from './pages/patients/patients';
import { Beds } from './pages/beds/beds';
import { Doctors } from './pages/doctors/doctors';
import { AiCenter } from './pages/ai-center/ai-center';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'stock', component: Stock },
  { path: 'patients', component: Patients },
  { path: 'beds', component: Beds },
  { path: 'doctors', component: Doctors },
  { path: 'ai', component: AiCenter },
];