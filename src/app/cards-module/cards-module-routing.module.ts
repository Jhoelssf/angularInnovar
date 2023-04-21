import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FavoritesComponent } from './cards/favorites/favorites.component';


const routes: Routes = [
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'favorite',
    component: FavoritesComponent,
  },
  {
    path: '',
    redirectTo: 'cards',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'cards',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsModuleRoutingModule {}
