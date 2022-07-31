import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatimentServiceService {
  private host:string = "http://localhost:8082";
  constructor(private http:HttpClient){}

  getBatiments(){
    return this.http.get(this.host+"/batiments");
  }

  getAgents(){
    return this.http.get(this.host+"/agents");
  }
}
