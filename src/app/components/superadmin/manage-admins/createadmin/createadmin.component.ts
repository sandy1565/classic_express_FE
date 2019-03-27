import { Component, OnInit } from '@angular/core';
import { DataAdminService } from '../../../../services/AdminDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Admin_class } from '../../../../Blueprints/aDmin';
import { Router } from '@angular/router';
import { LocalAssets } from '../../../../services/LocalDataService';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})

export class SuperadminCreateadminComponent implements OnInit {

cpassword="";
password="";
Ccontrol=true;
adNew:Admin_class;
DDown=[];
cities=[];
successFlag:boolean=false;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataAdminService, private rt:Router, private lsvc:LocalAssets){
      this.navbaruser.hide();
      this.superadminsidebar.show();
      this.adminsidebar.hide();
      this.successFlag=false;
      lsvc.getCountryDDowns().subscribe( t => {this.DDown = t} )
}

ngOnInit(){
}

AdminData(s){
  this.adNew = new Admin_class(s.name, s.pass, s.city, s.country, true);
  this.svc.postAdmin(this.adNew).subscribe( t => 
    {
      if(t.text()=="Posted"){
        this.successFlag=true;
      }
    } 
  );
}

CtrChange(s){
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
    }
  }
}

Back(){
  this.successFlag=false;
  this.cpassword="";
  this.password="";
}

Closer(){
  this.cpassword="";
  this.password="";
  this.rt.navigate(['master489912User_@postTrack']);
}

adList(){
  this.cpassword="";
  this.password="";
  this.rt.navigate(['master489912User_@postTrack','showadmin']);
}

ShoPass(){
 var x = <HTMLInputElement>document.getElementById("passo1");
 var y = <HTMLInputElement>document.getElementById("passo2");
 
 if(x.type == "password"){
   x.type = "text";
   y.type = "text";
 }else{
   x.type = "password";
   y.type = "password";  
 }
}

}
