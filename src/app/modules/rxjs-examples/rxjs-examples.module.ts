import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routes } from './rxjs-examples.routes';
import {
  CombineDataStreamsComponent,
  FirebaseDemoComponent,
  SubjectDemoComponent,
  SwitchMapDemoComponent,
} from './containers';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    CombineDataStreamsComponent,
    FirebaseDemoComponent,
    SubjectDemoComponent,
    SwitchMapDemoComponent,
  ],
})
export class RxJSExamplesModule {}
