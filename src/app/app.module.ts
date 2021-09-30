import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CategorieComponent} from './categories/categorie/categorie.component';
import {CategoriesComponent} from './categories/categories.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleriaModule} from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DialogModule,
    BrowserAnimationsModule,
    GalleriaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
