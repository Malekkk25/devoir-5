import { AddVolComponent } from './../add-vol/add-vol.component';
import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from './../vol.service';
@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {

  vols : Vol[];
  constructor(private volService:VolService) { 
  this.vols = volService.listeVols();
}

  ngOnInit(): void {
    
  }
  supprimerVol(p:Vol)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.volService.supprimerVol(p);
}
}
