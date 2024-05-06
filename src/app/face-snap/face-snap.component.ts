import { Component, Input, OnInit } from '@angular/core'
import { FaceSnap } from '../core/models/face-snap.model'
import {
  DatePipe,
  NgClass,
  NgIf,
  NgOptimizedImage,
  NgStyle,
  TitleCasePipe,
} from '@angular/common'
import { FaceSnapsService } from '../core/services/face-snaps.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap

  constructor(private faceSnapsServices: FaceSnapsService) {}

  buttonText!: string

  ngOnInit() {
    this.buttonText = 'Oh snap!'
  }

  onSnap() {
    if (this.buttonText === 'Oh snap!') {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh snap!'
    }
  }
}
