import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./app/pages/home/home.component";
import { FavoritesComponent } from "./app/pages/favorites/favorites.component";
import { SearchComponent } from "./app/pages/search/search.component";
import { LoginComponent } from "./app/pages/login/login.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "favorites",
        component: FavoritesComponent,
    },
    {
        path: "search",
        component: SearchComponent,
    },
    {
        path: "login",
        component: LoginComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PokeAppRoutingModule {}
