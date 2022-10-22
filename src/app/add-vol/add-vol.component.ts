import { VolService } from './../vol.service';
import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {
newVol= new Vol();
  constructor(private VolService: VolService) { }
addVol(){
  this.VolService.ajouterVol(this.newVol);
}
  ngOnInit(): void {
  }

}
