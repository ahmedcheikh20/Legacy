import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { CarsComponent } from "./cars/cars.component";
import { DetailComponent } from "./detail/detail.component";
import { HousesComponent } from "./houses/houses.component";
import { JoinComponent } from "./join/join.component";
import { LoginComponent } from "./login/login.component";
import { MainUIComponent } from "./main-ui/main-ui.component";
import { PhonesComponent } from "./phones/phones.component";
import { ProfileComponent } from "./profile/profile.component";


const routes: Routes = [
  { path: 'login',  component: LoginComponent} ,
  { path: 'join',  component:JoinComponent} ,
  { path: 'detail/:id',  component: DetailComponent},
  { path: 'cars',  component: CarsComponent} ,
  { path: 'phones',  component: PhonesComponent} ,
  { path: 'houses',  component: HousesComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'mainUI',  component: MainUIComponent}
  ,
  {path: '', pathMatch:"full", redirectTo: 'mainUI' },
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

