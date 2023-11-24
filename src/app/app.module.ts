import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainsectionComponent } from './mainsec/mainsection/mainsection.component';
import { ServicesSectComponent } from './services-sect/services-sect.component';
import { SitefooterComponent } from './sitefooter/sitefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainsectionComponent,
    ServicesSectComponent,
    SitefooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
