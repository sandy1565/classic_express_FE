import { Component, OnInit } from '@angular/core';
import { DataAdminService } from '../../../../services/AdminDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Admin_class } from '../../../../Blueprints/aDmin';
import { LocalAssets } from '../../../../services/LocalDataService';

@Component({
  selector: 'app-showadmin',
  templateUrl: './showadmin.component.html',
  styleUrls: ['./showadmin.component.css']
})
export class SuperadminShowadminComponent implements OnInit {

Cur_Entry:any={};
Ad_id="";
Ad_name="";
Ad_loc="";
Ad_arr=[];
Ad_newPass="";
Ccontrol=true;
DDown=[];
cities=[];
cur_index:number=0;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataAdminService, private lsvc:LocalAssets){
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
lsvc.getCountryDDowns().subscribe( t => {this.DDown = t} );
}
  
ngOnInit() {
  this.svc.getAdvals().subscribe( t => {this.Ad_arr = t});
}

getAstk(str:string):string{
    var t="";
    for(var x=0;x<str.length;x++)
      {
        t+='*';
      }
    return t;
}

Indexer(s:number){
  this.cur_index=s;
  this.Cur_Entry=this.Ad_arr[s];
  this.CtrChange(this.Cur_Entry.adminctry);
  this.Ccontrol=true;
}

ReplaceAd(){
  this.svc.UpdateAdmin(this.Cur_Entry, this.Cur_Entry.adminId).subscribe(t => {this.ngOnInit()});
}

DeleteAdmin(){
  this.svc.DelAdminById(this.Cur_Entry.adminId).subscribe( t => {this.ngOnInit()} );
  alert("Admin Deleted !!!");
}

AdminPermit(){
  if(this.Cur_Entry.active){
    //console.log("Admin Currently Active !!");
    this.svc.AdminAccess(this.Cur_Entry.adminId, false).subscribe( t => {this.ngOnInit()} );
  }
  else{
    //console.log("Admin Currently InActive !!");
    this.svc.AdminAccess(this.Cur_Entry.adminId, true).subscribe( t => {this.ngOnInit()} );
  }
}

CtrChange(s){
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
    }
  }
}

}
