import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImmutableComponent } from './immutable/immutable.component';
import { SandboxComponent } from './sandbox.component';


export const routes: Routes = [
  {
    path: '',
    component: SandboxComponent,
    children: [
      { path: 'immutable', component: ImmutableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandboxRoutingModule {}
