import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, { path: 'dashBoard', loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
