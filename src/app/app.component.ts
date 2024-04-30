import { Component, LOCALE_ID, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppComponent implements OnInit {
  constructor() {
    registerLocaleData(fr.default)
  }

  ngOnInit() {}
}
