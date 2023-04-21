import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokeAlexandertModuleRoutingModule } from "./poke-alexandert-module-routing.module";
import { PokeAlexandertComponent } from "./poke-alexandert/poke-alexandert.component";
import { PokeHeaderComponent } from "./poke-alexandert/poke-header/poke-header.component";
import { HttpClientModule } from "@angular/common/http";
import { FavoritesComponent } from "./poke-alexandert/favorites/favorites.component";
import { PokeListComponent } from "./poke-alexandert/poke-list/poke-list.component";
import { PokeDialogComponent } from "./poke-alexandert/poke-dialog/poke-dialog.component";
import { MatCommonModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    PokeAlexandertComponent,
    PokeHeaderComponent,
    FavoritesComponent,
    PokeListComponent,
    PokeDialogComponent,
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCommonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    PokeAlexandertModuleRoutingModule,
    HttpClientModule,
  ],
})
export class PokeAlexandertModuleModule {}
