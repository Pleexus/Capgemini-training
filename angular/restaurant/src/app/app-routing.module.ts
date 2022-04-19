import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { NotfoundtagComponent } from './notfoundtag/notfoundtag.component';
import { OrdersComponent } from './orders/orders.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'restaurant/:id', component: RestaurantComponent},
  {path: 'user', component: UserComponent},
  {path: 'order/:id', component: OrdersComponent},
  { path: '', pathMatch: 'full', redirectTo: '/User' },
  {path: '**', component:NotfoundtagComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[AdminComponent,
                                 MenuComponent,
                                 RestaurantComponent,
                                 UserComponent,
                                 OrdersComponent,
                                 NotfoundtagComponent]