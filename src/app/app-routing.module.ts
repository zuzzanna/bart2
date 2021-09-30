import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategorieComponent} from "./categories/categorie/categorie.component";
import {CategoriesComponent} from "./categories/categories.component";


const routes: Routes = [
  {path: 'architektura', component: CategorieComponent},
  {path: 'auta', component: CategorieComponent},
  {path: 'ludia', component: CategorieComponent},
  {path: 'jedlo', component: CategorieComponent},
  {path: 'priroda', component: CategorieComponent},
  {path: '**', component: CategoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
