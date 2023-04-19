import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pokemon/home/home.component';
import { FavoritesComponent } from './pokemon/favorites/favorites.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
    {
        path: '',
        component: PokemonComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'favorites',
                component: FavoritesComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PokemonRoutingModule { }
