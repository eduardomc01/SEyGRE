import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import { MapsComponent } from './maps/maps.component';
import { UsersComponent } from './users/users.component';
import { AddComponentsComponent } from './add-components/add-components.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EditComponent,
    StatsComponent,
    InfoComponent,
    MapsComponent,
    UsersComponent,
    AddComponentsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ChartsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs17nH2r-DCdIvpqA1ahrzl1X97E55tvM'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add-components', component: AddComponentsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'edit', component: EditComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'info', component: InfoComponent }
    ])
  ],
  providers: [ThemeService], // imporante en la version (angular/common) 6.0.0 en adelante de angular en ng2-charts
  bootstrap: [AppComponent]
})
export class AppModule { }
