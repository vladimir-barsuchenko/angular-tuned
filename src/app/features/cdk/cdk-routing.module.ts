import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdkComponent } from './cdk.component';


export const routes: Routes = [
  { path: '', component: CdkComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdkRoutingModule {}
