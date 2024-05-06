import { Routes } from '@angular/router'
import { LandingPageComponent } from './core/layout/landing-page/landing-page.component'
import { AuthGuard } from './core/auth/auth.guard'

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'auth', loadChildren: () => import('./core/auth/auth.routes') },
  {
    path: 'facesnaps',
    loadChildren: () => import('./features/face-snaps/face-snaps.routes'),
    canActivate: [AuthGuard],
  },
]
