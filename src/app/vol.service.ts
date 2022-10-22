import { Injectable } from '@angular/core';
import { Vol } from 'src/app/model/vol.model';
@Injectable({
  providedIn: 'root'
})
export class VolService {
vols :Vol[];
  constructor() { 
    this.vols = [
      {idVol : "TU283", agence: "Tunisair", destination: "Toulouse", Depart: "12:15",etat:"A atteri",terminal:"terminalA"},
      {idVol : "BJ515", agence: "Nouvelair", destination: "Toulouse", Depart: "13:40",etat:"A la porte d'mbarquement",terminal:"terminalM"},
      {idVol : "TU745", agence: "Tunisair", destination: "Bruxelles International", Depart: "14:50",etat:"A atteri",terminal:"terminalM"}
    ];
  }
  listeVols():Vol[]{
    return this.vols;
  }
ajouterVol(v:Vol){
  this.vols.push(v);
}
supprimerVol( prod: Vol){
  
  const index = this.vols.indexOf(prod, 0);
  if (index > -1) {
  this.vols.splice(index, 1);
  }}
 vol !:Vol;
 consulterVol(id:string):Vol{
  this.vol=this.vols.find(p => p.idVol ==id)!;
  return this.vol;
 }
 updateVol(v:Vol)
{
this.supprimerVol(v);
this.ajouterVol(v);
}
}
