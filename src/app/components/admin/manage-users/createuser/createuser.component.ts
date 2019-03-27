import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Router } from '@angular/router';
import { User_class } from '../../../../Blueprints/uSer';
import { LocalAssets } from '../../../../services/LocalDataService';
import { DataUserService } from '../../../../services/UserDataService';
import { DataAdminService } from '../../../../services/AdminDataService';
import {adminDashboard} from '../../../../services/AdminDashService';

declare var $: any;

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class AdminCreateuserComponent {

Ccontrol=true;
DDown=[];
cities=[];
nUser:User_class;  
nextFlag=false;
password="";
cpassword="";
RestCountry="";
RestCity="";
empty="";
Ccode=0;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private lsc:LocalAssets, private rt:Router, private adSvc:DataAdminService, private svc:DataUserService){
this.navbaruser.hide();
this.superadminsidebar.hide();
this.adminsidebar.show();
this.nextFlag=true;
adminDashboard.adminId =  parseInt(localStorage.getItem('admin'));
this.adSvc.GetAdminById(adminDashboard.adminId).subscribe( t => {
 
  this.RestCountry = t.adminctry;
  this.CtrChange(t.adminctry);
  this.RestCity=t.admincity
} );
lsc.getCountryDDowns().subscribe( t => { this.DDown = t} );
}

ngAfterViewChecked() {
    $('.alpha_bet').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
    });

    $('.moby').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });
  }

sGetUser(t){
  t = t.form.getRawValue();
  this.nUser = new User_class(t.fname, t.lname, t.pass, t.gender, parseInt(t.mcc), parseInt(t.mob),t.email,t.street,t.city,t.country,true);
  this.svc.postUser(this.nUser).subscribe( t => 
    {
      if(t.text()=="Posted"){
        alert("User Added Successfully !!!!");
      }else{
        alert("Registration Failed. Please Try after Some Time");
        this.rt.navigate(['admin']);
      }
    } 
  );
  this.nextFlag=false;
}

CtrChange(s){
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
      this.Ccode = this.DDown[x].Ccode;
    }
  }
}

Back(){
  this.nextFlag=true;
}

usList(){
  this.rt.navigate(['admin','showuser']);
}

Redirec(){
  this.rt.navigate(['admin','addcourier']);
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

Closer(){
  this.rt.navigate(['admin']);
}

}
