import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatimentComponent } from './batiment/batiment.component';
import { InterventionComponent } from './intervention/intervention.component';
import { AgentComponent } from './agent/agent.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BatimentServiceService } from 'src/batiment-service.service';
import { FormulaireComponent } from './formulaire/formulaire.component';

const appRoutes: Routes = [
{path:'agents', component: AgentComponent},
{path:'batiments', component: BatimentComponent},
{path:'interventions', component: InterventionComponent},
{path:'', 
 redirectTo:'',
 pathMatch: 'full'
}
]

@NgModule({
  declarations: [
    AppComponent,
    BatimentComponent,
    InterventionComponent,
    AgentComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [BatimentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
