import { HomeComponent, PageNotFoundComponent } from './containers';

export const routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'examples',
    loadChildren: () =>
      import('./modules/rxjs-examples/rxjs-examples.module').then(
        (m) => m.RxJSExamplesModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
