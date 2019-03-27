import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { DataCourierService } from '../../../../services/CourierDataService';
import {adminDashboard} from '../../../../services/AdminDashService';

@Component({
  selector: 'app-showcourier',
  templateUrl: './showcourier.component.html',
  styleUrls: ['./showcourier.component.css']
})
export class AdminShowcourierComponent implements OnInit {

Darr=[];  
cur_stat="Picked";
prev_stat="Booked";
Cur_index=0;
Cur_Id=0;
nlimit:boolean[]=[];
plimit:boolean[]=[];

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private Dcvs:DataCourierService){
this.navbaruser.hide();
this.superadminsidebar.hide();
this.adminsidebar.show();
this.Cur_index=0;
this.Cur_Id=0;
}

  ngOnInit() {
    adminDashboard.adminId =  parseInt(localStorage.getItem('admin'));
    this.Dcvs.getAdminCors(adminDashboard.adminId).subscribe( t => {
      this.Darr = t;
      this.Limit_Init();
    } 
  );
  }

  StatChange(){
    this.plimit[this.Cur_index]=false;
    this.Darr[this.Cur_index].prevStatus = this.Darr[this.Cur_index].curStatus;
    this.Darr[this.Cur_index].curStatus = States[ States[this.Darr[this.Cur_index].curStatus]+1 ];
    if(this.Darr[this.Cur_index].curStatus=="Delivered"){
      this.nlimit[this.Cur_index]=true;
    }
    this.Dcvs.OrderStatusChange(this.Cur_Id, this.Darr[this.Cur_index].prevStatus, this.Darr[this.Cur_index].curStatus).subscribe(() => null );
    alert("Status Changed");
  }  

  PStatChange(){
    this.nlimit[this.Cur_index]=false;
    this.Darr[this.Cur_index].curStatus = this.Darr[this.Cur_index].prevStatus;
    this.Darr[this.Cur_index].prevStatus = States[<number><any>States [this.Darr[this.Cur_index].prevStatus]-1];
    if(this.Darr[this.Cur_index].prevStatus=="Booked"){
      this.plimit[this.Cur_index]=true;
    }
    this.Dcvs.OrderStatusChange(this.Cur_Id, this.Darr[this.Cur_index].prevStatus, this.Darr[this.Cur_index].curStatus).subscribe(() =>null );
    alert("Status Changed");
  }
 
  Limit_Init(){
    for(var x=0;x<this.Darr.length;x++){
      if(this.Darr[x].prevStatus=="Booked"){
        this.plimit[x]=true;
      }
      else{
        this.plimit[x]=false;
      }
      
      if(this.Darr[x].curStatus=="Delivered"){
        this.nlimit[x]=true;
      }
      else{
        this.nlimit[x]=false;
      }
    }
  }

  nClicko(s:number, t:number){
    this.Cur_index=s;
    this.Cur_Id=t;
  }

  pClicko(s:number, t:number){
    this.Cur_index=s;
    this.Cur_Id=t;
  }
}

enum States{
  "Booked",
  "Waiting For Pickup", 
  "Picked", 
  "Received",
  "Dispatched",
  "In-Transit",
  "Reached Nearest Hub",
  "Out for Delivery",
  "Delivered"
};