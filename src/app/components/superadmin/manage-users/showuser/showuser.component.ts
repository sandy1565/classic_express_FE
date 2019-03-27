import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../../../services/UserDataService';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { User_class } from '../../../../Blueprints/uSer';
import { LocalAssets } from '../../../../services/LocalDataService';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class SuperadminShowuserComponent implements OnInit {

U_arr=[];
U_id="";
U_name="";
U_mail="";
U_loc="";
cur_index=0;
Cur_Entry:any={};
Ccontrol=true;
DDown=[];
cities=[];

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataUserService, private lsvc:LocalAssets){
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
lsvc.getCountryDDowns().subscribe( t => {this.DDown = t} );
}

ngOnInit() {
  this.svc.getUvals().subscribe( t => {this.U_arr = t} );
}

getAstk(str:string):string{
    var t="";
    for(var x=0;x<str.length;x++)
      {
        t+='*';
      }
    return t;
}

usIndexer(s:number){
  this.cur_index=s;
  this.Cur_Entry=this.U_arr[s];
  this.CtrChange(this.Cur_Entry.ucountry);
  this.Ccontrol=true;
}

ReplaceUs(){
  this.svc.UpdateUser(this.Cur_Entry, this.Cur_Entry.userId).subscribe(t => {this.ngOnInit()});
}

DeleteUser(){
  this.svc.DelUserById(this.Cur_Entry.userId).subscribe( t => {this.ngOnInit()} );
  alert("User Deleted !!!");
}

userPermit(){
  if(this.Cur_Entry.ustat){
    //console.log("User Currently Active !!");
    this.svc.UserAccess(this.Cur_Entry.userId, false).subscribe( t => {this.ngOnInit()} );
  }
  else{
    //console.log("Admin Currently InActive !!");
    this.svc.UserAccess(this.Cur_Entry.userId, true).subscribe( t => {this.ngOnInit()} );
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
