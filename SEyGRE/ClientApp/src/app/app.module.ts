import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AgmCoreModule} from '@agm/core';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

import { NavMenuInstitutionComponent } from './institution/inav-menu-institution/nav-menu-institution.component';
import { IMapsComponent } from './institution/imaps/imaps.component';
import { IHomeComponent } from './institution/ihome/ihome.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { HomeComponent } from './center/home/home.component';
import { ComponentsComponent } from './center/components/components.component';
import { StatsComponent } from './center/stats/stats.component';
import { InfoComponent } from './center/info/info.component';
import { MapsComponent } from './center/maps/maps.component';
import { UsersComponent } from './center/users/users.component';
import { AddComponentsComponent } from './center/components/modules/add-components/add-components.component';
import { LoginComponent } from './login/login.component';
import { AddCenterComponent } from './register/modules/add-center/add-center.component';
import { VerifyCenterComponent } from './institution/iverify-center/verify-center.component';
import { TopComponentsComponent } from './center/components/modules/table-top-components/top-components.component';
import { TableComponentsComponent } from './center/components/modules/table-components/table-components.component';
import { NavMenuComponent } from './center/nav-menu/nav-menu.component';
import { RecyclerStatesComponent } from './center/recycler-states/recycler-states.component';
import { EventsComponent } from './center/events/events.component';

import { NoticesComponent } from './citizen/chome/modules/notices/notices.component';

import { ProfileComponent } from './center/users/modules/profile/profile.component';
import { TableUsersComponent } from './center/users/modules/table-users/table-users.component';
import { TableEventsComponent } from './center/events/modules/table-events/table-events.component';
import { AddEventsComponent } from './center/events/modules/add-events/add-events.component';


import { CHomeComponent } from './citizen/chome/chome.component';
import { CMapsComponent } from './citizen/cmaps/cmaps.component';

import { CInfoComponent } from './citizen/cinfo/cinfo.component';

import { NavMenuCitizenComponent } from './citizen/nav-menu-citizen/nav-menu-citizen.component';
import { AddUsersComponent } from './center/users/modules/add-users/add-users.component';

import { LineComponent } from './center/stats/modules/line/line.component';
import { PieComponent } from './center/stats/modules/pie/pie.component';
import { PolarComponent } from './center/stats/modules/polar/polar.component';
import { BarsComponent } from './center/stats/modules/bars/bars.component';

import { BigVisualBarsComponent } from './center/stats/modules/big-visual-bars/big-visual-bars.component';
import { BigVisualLineComponent } from './center/stats/modules/big-visual-line/big-visual-line.component';
import { BigVisualPolarComponent } from './center/stats/modules/big-visual-polar/big-visual-polar.component';
import { BigVisualPieComponent } from './center/stats/modules/big-visual-pie/big-visual-pie.component';



import { CStatsComponent } from './citizen/cstats/cstats.component';
import { CBarsComponent } from './citizen/cstats/modules/bars/bars-ewaste/cbars.component';
import { CBarsEventsComponent } from './citizen/cstats/modules/bars/bars-events/cbars-events.component';
import { CLineComponent } from './citizen/cstats/modules/line/line-months/cline.component';
import { CLineWasteComponent } from './citizen/cstats/modules/line/line-waste-centers/cline-waste.component';
import { CPieComponent } from './citizen/cstats/modules/pie/cpie.component';
import { CPolarComponent } from './citizen/cstats/modules/polar/cpolar.component';
import { CBigVisualLineComponent } from './citizen/cstats/modules/big-visual-line/line-months/cbig-visual-line.component';
import { CBigVisualLineCentersWasteComponent } from './citizen/cstats/modules/big-visual-line/line-waste-centers/cbig-visual-line-centers-waste.component';

import { CBigVisualBarsComponent } from './citizen/cstats/modules/big-visual-bars/bars-ewaste/cbig-visual-bars.component';
import { CBigVisualBarsEventsComponent } from './citizen/cstats/modules/big-visual-bars/bars-events/cbig-visual-bars-events.component';


import { CBigVisualPolarComponent } from './citizen/cstats/modules/big-visual-polar/cbig-visual-polar.component';
import { CBigVisualPieComponent } from './citizen/cstats/modules/big-visual-pie/cbig-visual-pie.component';



import { AddNoticesComponent } from './institution/inotices/modules/add-notices/add-notices.component';
import { CNoticesComponent } from './institution/inotices/cnotices.component';
import { TableNoticesComponent } from './institution/inotices/modules/table-notices/table-notices.component';
import { ReportsComponent } from './institution/reports/reports.component';
import { CentersReportsComponent } from './institution/reports/modules/centers-reports.component';

import { IInfoComponent } from './institution/iinfo/iinfo.component';


import { InfoGeneralComponent } from './info/info-general.component';

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    NavMenuComponent,
    HomeComponent,
    ComponentsComponent,
    StatsComponent,
    InfoComponent,
    RecyclerStatesComponent,
    MapsComponent,
    UsersComponent,
    AddComponentsComponent,
    AddCenterComponent,

    TopComponentsComponent,
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
    IInfoComponent,
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

    BigVisualBarsComponent,
    BigVisualLineComponent,
    BigVisualPolarComponent,
    BigVisualPieComponent,


    CStatsComponent,

    CBarsComponent,
    CBarsEventsComponent,

    CLineComponent,
    CLineWasteComponent,

    CPieComponent,
    CPolarComponent,

    CBigVisualBarsComponent,
    CBigVisualBarsEventsComponent,

    CBigVisualLineComponent,

    CBigVisualLineCentersWasteComponent,


    CBigVisualPolarComponent,
    CBigVisualPieComponent,

    NoticesComponent,
    AddNoticesComponent,
    CNoticesComponent,
    TableNoticesComponent,
    ReportsComponent,
    CentersReportsComponent,

    InfoGeneralComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule,
    PdfViewerModule,
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
      { path: 'table-top-components', component: TopComponentsComponent },

      { path: 'profile', component: ProfileComponent },
      { path: 'table-users', component: TableUsersComponent },
      { path: 'add-events', component: EventsComponent },
      { path: 'table-events', component: TableEventsComponent },

      { path: 'events', component: EventsComponent },
      { path: 'recycler-states', component: RecyclerStatesComponent },

      { path: 'users', component: UsersComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'stats', component: StatsComponent },

     
      { path: 'big-visual-bars', component: BigVisualBarsComponent },
      { path: 'big-visual-pie', component: BigVisualPieComponent },
      { path: 'big-visual-line', component: BigVisualLineComponent },
      { path: 'big-visual-polar', component: BigVisualPolarComponent },

      { path: 'maps', component: MapsComponent },
      { path: 'info', component: InfoComponent },

      { path: 'i-home', component: IHomeComponent },
      { path: 'i-verify-center', component: VerifyCenterComponent },
      { path: 'i-maps', component: IMapsComponent },
      { path: 'i-reports', component: ReportsComponent },
      { path: 'i-info', component: IInfoComponent },
      { path: 'add-notices', component: CNoticesComponent },

      { path: '', component: CHomeComponent, pathMatch: 'full' },
      { path: 'c-stats', component: CStatsComponent },
      { path: 'c-maps', component: CMapsComponent },
      { path: 'c-info', component: CInfoComponent },

      { path: 'c-big-visual-bars', component: CBigVisualBarsComponent },

      { path: 'c-big-visual-bars-events', component: CBigVisualBarsEventsComponent },

      { path: 'c-big-visual-pie', component: CBigVisualPieComponent },

      { path: 'c-big-visual-line', component: CBigVisualLineComponent },

      { path: 'c-big-visual-line-waste-centers', component: CBigVisualLineCentersWasteComponent },

      { path: 'c-big-visual-polar', component: CBigVisualPolarComponent },

    ])
  ],
  providers: [ThemeService, GoogleMapsAPIWrapper], // importante en la version (angular/common) 6.0.0 en adelante de angular en ng2-charts (ThemeService)
  bootstrap: [AppComponent]
})

export class AppModule { }
