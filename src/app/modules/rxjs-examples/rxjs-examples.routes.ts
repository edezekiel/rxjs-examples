import {
  CombineDataStreamsComponent,
  FirebaseDemoComponent,
  SubjectDemoComponent,
  SwitchMapDemoComponent,
} from './containers';

export const routes = [
  { path: 'firebase', component: FirebaseDemoComponent },
  {
    path: 'combining-data-streams',
    component: CombineDataStreamsComponent,
  },
  {
    path: 'switch-map-demo',
    component: SwitchMapDemoComponent,
  },
  {
    path: 'subject-demo',
    component: SubjectDemoComponent,
  },
  {
    path: '',
    redirectTo: 'combining-data-streams',
    pathMatch: 'full',
  },
]