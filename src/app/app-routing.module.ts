import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: './main/main.module#MainModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
