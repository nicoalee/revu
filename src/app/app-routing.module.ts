import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyViewComponent } from './property-view/property-view.component';


const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent,
  },
  {
    path: "property/new", component: AddPropertyComponent
  },
  {
    path: "property/:address", component: PropertyViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
