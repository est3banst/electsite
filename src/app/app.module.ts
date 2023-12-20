import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainsectionComponent } from './mainsec/mainsection/mainsection.component';
import { ServicesSectComponent } from './services-sect/services-sect.component';
import { SitefooterComponent } from './sitefooter/sitefooter.component';
import { HeromainComponent } from './heromain/heromain.component';
import { NavegatComponent } from './navegat/navegat.component';
import { HouseingComponent } from './houseing/houseing.component';
import { IndustryComponent } from './industry/industry.component';
import { InstallationsComponent } from './installations/installations.component';
import { PanelsComponent } from './panels/panels.component';
import { WorksComponent } from './works/works.component';
import { ContactnowComponent } from './contactnow/contactnow.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { ClimateComponent } from './climate/climate.component';


@NgModule({
  declarations: [
    AppComponent,
    MainsectionComponent,
    HeromainComponent,
    ServicesSectComponent,
    SitefooterComponent,
    NavegatComponent,
    HouseingComponent,
    IndustryComponent,
    InstallationsComponent,
    PanelsComponent,
    WorksComponent,
    ContactnowComponent,
    ClimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faPhoneVolume,

    )
  }
}
