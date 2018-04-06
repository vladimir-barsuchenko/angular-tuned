import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './components/main/main.module#MainModule' },
  { path: 'demo', loadChildren: './components/demo/demo.module#DemoModule' },
  { path: 'cdk', loadChildren: './features/cdk/cdk.module#CdkModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
