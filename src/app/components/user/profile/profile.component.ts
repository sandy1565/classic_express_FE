import { Component, OnInit } from '@angular/core';
import { LocalAssets } from '../../../services/LocalDataService';
import { DataUserService } from '../../../services/UserDataService';
import { userDashboard } from '../../../services/UserDashService';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Ccontrol=true;
  DDown=[];
  cities=[];
  Darr:any={};

  constructor(private lsvc:LocalAssets, private Usvc:DataUserService) {}

  ngOnInit() {
    userDashboard.userid = parseInt(localStorage.getItem('user'));
    this.lsvc.getCountryDDowns().subscribe( t => {this.DDown = t} );
    this.Usvc.GetUserById(userDashboard.userid).subscribe( data => {this.Darr = data; this.CtrChange(this.Darr.ucountry)} );
  }

  CtrChange(s){
  //console.log(s);
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
    }
  }
}

}
