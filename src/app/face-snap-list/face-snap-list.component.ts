import { Component, OnInit } from '@angular/core'
import { FaceSnap } from '../core/models/face-snap.model'
import { FaceSnapComponent } from '../face-snap/face-snap.component'
import { AsyncPipe, NgForOf } from '@angular/common'
import { FaceSnapsService } from '../core/services/face-snaps.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, NgForOf, AsyncPipe],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapServices: FaceSnapsService) {}

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapServices.getAllFaceSnaps()
  }
}
