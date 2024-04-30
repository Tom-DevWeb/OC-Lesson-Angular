import { Component, OnInit } from '@angular/core'
import {
  DatePipe,
  NgClass,
  NgIf,
  NgOptimizedImage,
  NgStyle,
  TitleCasePipe,
} from '@angular/common'
import { FaceSnap } from '../models/face-snap.model'
import { FaceSnapsService } from '../services/face-snaps.service'
import { ActivatedRoute, RouterLink } from '@angular/router'

@Component({
  selector: 'app-single-face-snap',
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
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  constructor(
    private faceSnapsServices: FaceSnapsService,
    private route: ActivatedRoute,
  ) {}
  faceSnap!: FaceSnap
  buttonText!: string

  ngOnInit() {
    this.buttonText = 'Oh snap!'
    const faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapsServices.getFaceSnapById(faceSnapId)
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
