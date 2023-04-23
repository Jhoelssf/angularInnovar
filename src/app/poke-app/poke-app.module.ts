import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokeAppRoutingModule } from "./poke-app-routing.module";
import { AppComponent } from "./app/app.component";
import { PokeListComponent } from "./app/components/poke-list/poke-list.component";
import { PokeDetailComponent } from "./app/components/poke-detail/poke-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./app/pages/home/home.component";
import { FavoritesComponent } from "./app/pages/favorites/favorites.component";
import { PokeCardComponent } from "./app/components/poke-card/poke-card.component";
import { FooterComponent } from "./app/components/footer/footer.component";
import { NavbarComponent } from "./app/components/navbar/navbar.component";
import { MatDialogModule, MatDialogConfig } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { SearchComponent } from "./app/pages/search/search.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from './app/pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        PokeListComponent,
        PokeDetailComponent,
        HomeComponent,
        FavoritesComponent,
        PokeCardComponent,
        FooterComponent,
        NavbarComponent,
        SearchComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        PokeAppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
    providers: [MatDialogConfig],
})
export class PokeAppModule {}
