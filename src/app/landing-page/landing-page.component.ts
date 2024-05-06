import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  userEmail!: string

  onSubmitForm(form: NgForm): void {
    console.log(form.value)
  }
}
