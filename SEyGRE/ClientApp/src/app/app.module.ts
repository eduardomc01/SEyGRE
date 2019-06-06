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
import { AddComponentsComponent } from './center/add-components/add-components.component';
import { LoginComponent } from './login/login.component';
import { AddCenterComponent } from './center/add-center/add-center.component';
import { VerifyCenterComponent } from './institution/verify-center/verify-center.component';
import { ActionsComponentsComponent } from './center/actions-components/actions-components.component';
import { TableComponentsComponent } from './center/table-components/table-components.component';
import { NavMenuComponent } from './center/nav-menu/nav-menu.component';


@NgModule({
  declarations:[
    AppComponent,

    NavMenuComponent,
    NavMenuInstitutionComponent,
    HomeComponent,
    EditComponent,
    StatsComponent,
    InfoComponent,
    MapsComponent,
    UsersComponent,
    AddComponentsComponent,
    LoginComponent,
    AddCenterComponent,
    VerifyCenterComponent,
    ActionsComponentsComponent,
    TableComponentsComponent,

    IHomeComponent,
    IMapsComponent,
    
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
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'add-center', component: AddCenterComponent },
      { path: 'add-components', component: AddComponentsComponent },
      { path: 'table-components', component: TableComponentsComponent },
      { path: 'actions-components', component: ActionsComponentsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'edit', component: EditComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'info', component: InfoComponent },

      { path: 'ihome', component: IHomeComponent },
      { path: 'verify-center', component: VerifyCenterComponent },
      { path: 'imaps', component: IMapsComponent },
    ])
  ],
  providers: [ThemeService], // importante en la version (angular/common) 6.0.0 en adelante de angular en ng2-charts
  bootstrap: [AppComponent]
})

export class AppModule { }
