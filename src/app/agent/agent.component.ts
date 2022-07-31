import { Component, OnInit } from '@angular/core';
import { BatimentServiceService } from 'src/batiment-service.service';
import { Router, RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agents:any;
  textBouton ='Créer une nouveau agent';
  constructor(private batiService:BatimentServiceService, private router:Router) { }
  ngOnInit() {
    
    this.batiService.getAgents().subscribe(result=>{
      this.agents=result;
      console.log(this.agents);
    })
  }

}
