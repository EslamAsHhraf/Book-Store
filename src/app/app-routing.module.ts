import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { BookListComponent } from './components/book-list/book-list.component';
const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'search/:searchTerm', component: BookListComponent },
  { path: 'book/:id', component: BookPageComponent },
  { path: 'cart-page', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
