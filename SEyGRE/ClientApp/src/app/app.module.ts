import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule} from '@agm/core';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

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


import { LineComponent } from './center/stats/modules/line/line.component';
import { PieComponent } from './center/stats/modules/pie/pie.component';
import { PolarComponent } from './center/stats/modules/polar/polar.component';
import { BarsComponent } from './center/stats/modules/bars/bars.component';
import { AddUsersComponent } from './center/users/modules/add-users/add-users.component';


import { BigVisualBarsComponent } from './center/stats/modules/big-visual-bars/big-visual-bars.component';
import { BigVisualLineComponent } from './center/stats/modules/big-visual-line/big-visual-line.component';
import { BigVisualPolarComponent } from './center/stats/modules/big-visual-polar/big-visual-polar.component';
import { BigVisualPieComponent } from './center/stats/modules/big-visual-pie/big-visual-pie.component';


import { BigVisualComponent } from './center/stats/modules/big-visual/big-visual.component';


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


    LineComponent,
    PieComponent,
    PolarComponent,
    BarsComponent,
    AddUsersComponent,
    BigVisualComponent,
    BigVisualBarsComponent,
    BigVisualLineComponent,
    BigVisualPolarComponent,
    BigVisualPieComponent, 



  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ChartsModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs17nH2r-DCdIvpqA1ahrzl1X97E55tvM',
      language: 'en',
      libraries: ['geometry', 'places']
    }),
    RouterModule.forRoot([
      { path: 'Login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'add-center', component: AddCenterComponent },

      { path: 'add-users', component: AddUsersComponent },

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

      { path: 'bars', component: BarsComponent },
      { path: 'pie', component: PieComponent },
      { path: 'polar', component: PolarComponent },
      { path: 'line', component: LineComponent },

      { path: 'big-visual', component: BigVisualComponent },
      { path: 'big-visual-bars', component: BigVisualBarsComponent },
      { path: 'big-visual-pie', component: BigVisualPieComponent },
      { path: 'big-visual-line', component: BigVisualLineComponent },
      { path: 'big-visual-polar', component: BigVisualPolarComponent },

      { path: 'maps', component: MapsComponent },
      { path: 'info', component: InfoComponent },
       
      { path: 'ihome', component: IHomeComponent },
      { path: 'verify-center', component: VerifyCenterComponent },
      { path: 'imaps', component: IMapsComponent },

      { path: '', component: CHomeComponent, pathMatch: 'full' },
      { path: 'cmaps', component: CMapsComponent },
      { path: 'cinfo', component: CInfoComponent },

    ])
  ],
  providers: [ThemeService, GoogleMapsAPIWrapper], // importante en la version (angular/common) 6.0.0 en adelante de angular en ng2-charts (ThemeService)
  bootstrap: [AppComponent]
})

export class AppModule { }
