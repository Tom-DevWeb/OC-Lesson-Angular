import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { httpInterceptorproviders } from './core/interceptors'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    httpInterceptorproviders,
  ],
}
