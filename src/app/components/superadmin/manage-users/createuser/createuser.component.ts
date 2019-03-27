import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../../../services/UserDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Router } from '@angular/router';
import { User_class } from '../../../../Blueprints/uSer';
import { LocalAssets } from '../../../../services/LocalDataService';

declare var $: any;

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class SuperadminCreateuserComponent{

Ccontrol=true;
DDown=[];
cities=[];
nUser:User_class;  
nextFlag=false;
password="";
cpassword="";
empty="";
Ccode=0;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataUserService, private rt:Router, private lsc:LocalAssets){
  this.nextFlag=true;
  this.navbaruser.hide();
  this.superadminsidebar.show();
  this.adminsidebar.hide();
  lsc.getCountryDDowns().subscribe( t => {this.DDown = t} );
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
  this.nUser = new User_class(t.fname, t.lname, t.pass, t.gender, parseInt(t.mcc), parseInt(t.mob),t.email,t.street,t.city,t.country,true);
  this.svc.postUser(this.nUser).subscribe( t => 
    {
      if(t.text()=="Posted"){
        alert("User Added Successfully !!!!");
      }else{
        alert("Registration Failed. Please Try after Some Time");
        this.rt.navigate(['master489912User_@postTrack']);
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

Closer(){
  this.rt.navigate[('master489912User_@postTrack')];
}

usList(){
  this.rt.navigate(['master489912User_@postTrack','showuser']);
}

Redirec(){
  this.rt.navigate(['master489912User_@postTrack','addcourier']);
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
