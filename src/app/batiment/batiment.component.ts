import { Component, OnInit } from '@angular/core';
import { BatimentServiceService } from 'src/batiment-service.service';
import { Router, RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})
export class BatimentComponent implements OnInit {
  batiment:any;
  batiments!: Array<any>;
  constructor(private batiService:BatimentServiceService, private router:Router) { }
  ngOnInit() {
    
    this.batiService.getBatiments().subscribe(result=>{
      this.batiment=result;
      console.log(this.batiment);
    })
  }

}
