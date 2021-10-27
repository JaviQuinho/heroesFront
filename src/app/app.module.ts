import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/shared/main/main.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { MissionComponent } from './pages/mission/mission.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewHeroComponent } from './pages/hero/new-hero/new-hero.component';
import { TableHeroComponent } from './pages/hero/table-hero/table-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { NewMissionComponent } from './pages/mission/new-mission/new-mission.component';
import { TableMissionComponent } from './pages/mission/table-mission/table-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeroComponent,
    MissionComponent,
    NewHeroComponent,
    TableHeroComponent,
    NewMissionComponent,
    TableMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
