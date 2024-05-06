import { Component, LOCALE_ID } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import { HeaderComponent } from './core/layout/header/header.component'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppComponent {
  constructor() {
    registerLocaleData(fr.default)
  }
}
