import { Component, OnInit } from '@angular/core'
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf,
  NgOptimizedImage,
  NgStyle,
  TitleCasePipe,
} from '@angular/common'
import { FaceSnap } from '../../../core/models/face-snap.model'
import { FaceSnapsService } from '../../../core/services/face-snaps.service'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { Observable, tap } from 'rxjs'

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
    AsyncPipe,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
  ) {}
  faceSnap$!: Observable<FaceSnap>
  buttonText!: string

  ngOnInit() {
    this.buttonText = 'Oh snap!'
    const faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'snap')
        .pipe(tap(() => (this.buttonText = 'Oops, unSnap!')))
    } else {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'unsnap')
        .pipe(tap(() => (this.buttonText = 'Oh Snap!')))
    }
  }
}
