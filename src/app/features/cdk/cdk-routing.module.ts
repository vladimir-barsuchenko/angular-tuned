import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkComponent } from './cdk.component';
import { PortalComponent } from './components/portal/portal.component';

export const routes: Routes = [
  {
    path: '',
    component: CdkComponent,
    children: [
      { path: 'portal', component: PortalComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkRoutingModule {}
