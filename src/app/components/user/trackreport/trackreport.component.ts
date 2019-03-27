import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../../services/UserDataService';
import { userDashboard } from '../../../services/UserDashService';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-trackreport',
  templateUrl: './trackreport.component.html',
  styleUrls: ['./trackreport.component.css']
})
export class TrackreportComponent implements OnInit {

  TrackObj:any={};
  OrdObj:any={};
  trId=0;
  OrdId=0;
  x=0;

  States:any[]=[
  {
    Prog:"Booked",
    viz:false,
    wid:"11%"  
  },
  {
    Prog:"Waiting For Pickup",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Picked",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Received",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Dispatched",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"In-Transit",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Reached Nearest Hub",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Out For Delivery",
    viz:false,
    wid:"11%"
  },
  {
    Prog:"Delivered",
    viz:false,
    wid:"12%"
  } 
]

  constructor(private svc:userDashboard, private rout:Router, private Dsvc:DataUserService) { 
    userDashboard.userid = parseInt(localStorage.getItem('user'));
    userDashboard.orderid = parseInt(localStorage.getItem('CurOrd'));
    this.OrdId = parseInt(localStorage.getItem('CurOrd'));
    userDashboard.trackid = parseInt(localStorage.getItem('ITrack'));
  }

  ngOnInit() {
    this.svc.getTrackData(userDashboard.trackid).subscribe( t => 
      { 
        this.TrackObj = JSON.parse(t.text());
        this.trId = userDashboard.trackid; 
        this.Moder(this.TrackObj.mode) ;
        this.Stat_Control(this.TrackObj.curStatus); 
        this.progressJs();
      } 
    );

    this.svc.getTrackOrder(this.OrdId).subscribe( t =>
      {
        this.OrdObj = JSON.parse(t.text());
      }
     );
  }

  ngOnDestroy(){
    localStorage.removeItem('CurOrd');
    localStorage.removeItem('ITrack');
  }

  Closer(){
    this.rout.navigate(['user']);
  }

  progressJs(){
    var x = document.getElementsByClassName("progress-bar-info");
    for(var i=0;i<x.length;i++){
      if(!this.States[i].viz){
        (<HTMLBodyElement>x.item(i)).style.visibility="hidden";  
      }
      (<HTMLBodyElement>x.item(i)).innerHTML=this.States[i].Prog;
      (<HTMLBodyElement>x.item(i)).style.width=this.States[i].wid;
    }
  }

  Moder(s){
    if(s=="Air"){
      this.x=1;
    }else if(s=="Ship"){
      this.x=2;
    }else{
      this.x=3;
    }
  }

  Stat_Control(s:string){
    for(var i=0; i<this.States.length;i++){
      this.States[i].viz=true;
      if(s==this.States[i].Prog){
        break;  
      }
    }
  }
}
