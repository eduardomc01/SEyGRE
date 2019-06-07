import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavMenuInstitutionComponent } from './institution/nav-menu-institution/nav-menu-institution.component';
import { IMapsComponent } from './institution/maps/imaps.component';
import { IHomeComponent } from './institution/home/ihome.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './center/home/home.component';
import { EditComponent } from './center/edit/edit.component';
import { StatsComponent } from './center/stats/stats.component';
import { InfoComponent } from './center/info/info.component';
import { MapsComponent } from './center/maps/maps.component';
import { UsersComponent } from './center/users/users.component';
import { AddComponentsComponent } from './center/edit/modules/add-components/add-components.component';
import { LoginComponent } from './login/login.component';
import { AddCenterComponent } from './center/add-center/add-center.component';
import { VerifyCenterComponent } from './institution/verify-center/verify-center.component';
import { ActionsComponentsComponent } from './center/edit/modules/actions-components/actions-components.component';
import { TableComponentsComponent } from './center/edit/modules/table-components/table-components.component';
import { NavMenuComponent } from './center/nav-menu/nav-menu.component';
import { RecyclerStatesComponent } from './center/recycler-states/recycler-states.component';
import { EventsComponent } from './center/events/events.component';

import { ProfileComponent } from './center/users/modules/profile/profile.component';
import { TableUsersComponent } from './center/users/modules/table-users/table-users.component';
import { TableEventsComponent } from './center/events/modules/table-events/table-events.component';
import { AddEventsComponent } from './center/events/modules/add-events/add-events.component';

import { CHomeComponent } from './citizen/chome/chome.component';
import { CMapsComponent } from './citizen/cmaps/cmaps.component';
import { CInfoComponent } from './citizen/cinfo/cinfo.component';
import { NavMenuCitizenComponent } from './citizen/nav-menu-citizen/nav-menu-citizen.component';

@NgModule({
  declarations:[
    AppComponent,

    LoginComponent,

    NavMenuComponent,
    HomeComponent,
    EditComponent,
    StatsComponent,
    InfoComponent,
    RecyclerStatesComponent,
    MapsComponent,
    UsersComponent,
    AddComponentsComponent,
    AddCenterComponent,

    ActionsComponentsComponent,
    TableComponentsComponent,
    RecyclerStatesComponent,
    EventsComponent,

    ProfileComponent,
    TableUsersComponent,
    TableEventsComponent,
    AddEventsComponent,

    NavMenuInstitutionComponent,
    IHomeComponent,
    IMapsComponent,
    VerifyCenterComponent,
    EventsComponent,


    CHomeComponent,
    CMapsComponent,
    CInfoComponent,
    NavMenuCitizenComponent,



  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ChartsModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs17nH2r-DCdIvpqA1ahrzl1X97E55tvM',
    }),
    RouterModule.forRoot([
      { path: 'Login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'add-center', component: AddCenterComponent },
      { path: 'add-components', component: AddComponentsComponent },
      { path: 'table-components', component: TableComponentsComponent },
      { path: 'actions-components', component: ActionsComponentsComponent },

      { path: 'profile', component: ProfileComponent },
      { path: 'table-users', component: TableUsersComponent },
      { path: 'add-events', component: EventsComponent },
      { path: 'table-events', component: TableEventsComponent },

      { path: 'events', component: EventsComponent },
      { path: 'recycler-states', component: RecyclerStatesComponent },

      { path: 'users', component: UsersComponent },
      { path: 'edit', component: EditComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'info', component: InfoComponent },

      { path: 'ihome', component: IHomeComponent },
      { path: 'verify-center', component: VerifyCenterComponent },
      { path: 'imaps', component: IMapsComponent },

      { path: '', component: CHomeComponent },
      { path: 'cmaps', component: CMapsComponent },
      { path: 'cinfo', component: CInfoComponent },

    ])
  ],
  providers: [ThemeService], // importante en la version (angular/common) 6.0.0 en adelante de angular en ng2-charts
  bootstrap: [AppComponent]
})

export class AppModule { }
