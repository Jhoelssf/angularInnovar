import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const materials =[
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule
    ];

@NgModule({
  imports:[materials],
  exports:[materials]
})
export class MaterialModule { }
