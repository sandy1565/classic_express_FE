import { Component, OnInit , OnDestroy} from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import {DataCourierService} from '../../../services/CourierDataService';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-qtrack',
  templateUrl: './qtrack.component.html',
  styleUrls: ['./qtrack.component.css']
})
export class QtrackComponent implements OnInit, OnDestroy {

TrackObj:any={};
trId=0;
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

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private Tsc:DataCourierService, private router:Router){
   this.navbaruser.show();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
   NavbarUserService.trackId = parseInt(localStorage.getItem('Itrack'));
}
  ngOnInit() {
    $(".nav-folderized h4").click(function(){
	    $(this).parent(".nav").toggleClass("open"); 
	    $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
    });
    this.Tsc.getTrackData(NavbarUserService.trackId).subscribe( t => 
      { 
        this.TrackObj = JSON.parse(t.text());
        this.trId = NavbarUserService.trackId; 
        this.Moder(this.TrackObj.mode) ;
        this.Stat_Control(this.TrackObj.curStatus); 
        this.progressJs();
      } 
    );
  }

  ngOnDestroy(){
    localStorage.removeItem('Itrack');
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

  Closer(){
    this.router.navigate(['']);
  }

}

