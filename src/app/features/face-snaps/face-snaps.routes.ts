import { Routes } from '@angular/router'
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component'
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component'
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FaceSnapListComponent,
      },
      {
        path: 'create',
        component: NewFaceSnapComponent,
      },
      {
        path: ':id',
        component: SingleFaceSnapComponent,
      },
    ],
  },
]

export default routes
