import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { VolService } from 'src/app/vol.service';
import { Vol } from '../model/vol.model';
@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',
  styleUrls: ['./update-vol.component.css']
})
export class UpdateVolComponent implements OnInit {
  currentVol = new Vol();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,private volService: VolService){}
  ngOnInit(){
    this.currentVol = this.volService.consulterVol(this.activatedRoute.snapshot. params['id']);
console.log(this.currentVol);
  }
  updateVol()
  { 
  this.volService.updateVol(this.currentVol);
  this.router.navigate(['vols']);
  }
}
