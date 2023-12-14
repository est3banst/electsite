import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseingComponent } from './houseing/houseing.component';
import { IndustryComponent } from './industry/industry.component';
import { InstallationsComponent } from './installations/installations.component';
import { PanelsComponent } from './panels/panels.component';
import { WorksComponent } from './works/works.component';
import { ContactnowComponent } from './contactnow/contactnow.component';
import { HeromainComponent } from './heromain/heromain.component';

const routes: Routes = [
  {path: '', component:HeromainComponent},
  { path: 'works', component:WorksComponent },
  { path: 'contactnow', component:ContactnowComponent },
  { path: 'houseing', component: HouseingComponent },
  { path: 'industry', component: IndustryComponent },
  { path: 'installations', component: InstallationsComponent },
  { path: 'panels', component: PanelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
