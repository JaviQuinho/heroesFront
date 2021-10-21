import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/shared/main/main.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { MissionComponent } from './pages/mission/mission.component';

import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeroComponent,
    MissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
