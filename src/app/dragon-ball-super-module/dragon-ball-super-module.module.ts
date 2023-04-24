import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonBallSuperModuleRoutingModule } from './dragon-ball-super-module-routing.module';
import { DragonBallSuperComponent } from './dragon-ball-super/dragon-ball-super.component';
import { NavbarComponent } from './dragon-ball-super/navbar/navbar.component';
import { CardDbsComponent } from './dragon-ball-super/card-dbs/card-dbs.component';
import { SoundTrackComponent } from './dragon-ball-super/sound-track/sound-track.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingComponent } from './dragon-ball-super/loading/loading.component';
import { DialogComponent } from './dragon-ball-super/card-dbs/dialog/dialog.component';

@NgModule({
  declarations: [DragonBallSuperComponent,
                 CardDbsComponent,
                 NavbarComponent,
                DialogComponent,
                SoundTrackComponent,
                LoadingComponent],
  imports: [
    CommonModule,
    DragonBallSuperModuleRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class DragonBallSuperModuleModule { }
