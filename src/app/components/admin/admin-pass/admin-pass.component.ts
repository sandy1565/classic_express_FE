import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { DataAdminService } from '../../../services/AdminDataService';
import {adminDashboard} from '../../../services/AdminDashService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-pass',
  templateUrl: './admin-pass.component.html',
  styleUrls: ['./admin-pass.component.css']
})
export class AdminPassComponent implements OnInit {

  cur_pass="";
  new_pass="";
  con_pass="";
  Darr:any={};
  Checker=false;
  blocker=false;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private aData:DataAdminService, private rout:Router){
this.navbaruser.hide();
this.superadminsidebar.hide();
this.adminsidebar.show();
this.Checker=false;
this.blocker=false;
}
  ngOnInit() {
    adminDashboard.adminId =  parseInt(localStorage.getItem('admin'));
    this.aData.GetAdminById(adminDashboard.adminId).subscribe( t => {this.Darr = t } );
  }

  ShoPass(){
    var x = <HTMLInputElement>document.getElementById("npass");
    var y = <HTMLInputElement>document.getElementById("conpass");
 
      if(x.type == "password"){
        x.type = "text";
        y.type = "text";
      }else{
        x.type = "password";
        y.type = "password";  
      }
  }

  Pchange(){
    if(this.cur_pass!=this.Darr.adminPass){
      this.blocker=false;
      this.Checker=true;
    }
    else if(this.new_pass!=this.con_pass){
      this.Checker=false;
      this.blocker=true;
    }else{
      this.Checker=false;
      this.blocker=false;
      this.aData.ChangeAdminPass(adminDashboard.adminId.toString(),this.new_pass).subscribe(() =>null );
      alert("Password Changed !!! Use new Password to Login Next Time");
      this.rout.navigate(['admin']);
    }
  }
}
