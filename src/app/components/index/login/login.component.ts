import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { Router } from '@angular/router';
import {AdminLogin, UserLogin} from '../../../Blueprints/Login';
import {LogService} from '../../../services/LoginService';
import { DataUserService } from '../../../services/UserDataService';
import { DataAdminService } from '../../../services/AdminDataService';
import {userDashboard} from '../../../services/UserDashService';
import {adminDashboard} from '../../../services/AdminDashService';
import { ROLES } from '../../../Blueprints/roles';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ROLES_DDL = Object.keys(ROLES);
  ROLES = {...ROLES};
  usObj:UserLogin;
  adObj:AdminLogin;
  trials=3;
  Checker=false;
  adChecker=false;
  usChecker=false;
  blocker=false;

  constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,
    private svc:LogService, private rt:Router, private Usvc:DataUserService,private ush:userDashboard, private Asc:DataAdminService){
   this.navbaruser.show();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
   this.trials=3;
   this.Checker=false;
   this.adChecker=false;
   this.usChecker=false;
   this.blocker=false;
 }

  ngOnInit() {
    $(".nav-folderized h4").click(function(){
	    $(this).parent(".nav").toggleClass("open"); 
	    $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
    });
  }
  
  RegDirec(){
    this.rt.navigate(['uregister']);
  }

  LoginSub(loginForm:NgForm){
    console.log("hiiii")
    // if(this.trials==0){
    //   alert("You Ran Out Of Tries !!"); 
    //   this.rt.navigate(['']);
    // }
    this.svc.getLogin(loginForm.value).subscribe(data => {
      var userRole = data['role'].roleName;
      const token = data['accessToken'];
      console.log(token);
      console.log(data);
      if(data['status'] === 200) {
        if(userRole == "ADMIN"){
          localStorage.setItem('token', data['accessToken']);
          localStorage.setItem('admin', userRole);
          this.rt.navigate(['admin']);
        }
        else if(userRole == "SUPER ADMIN"){
          console.log("-------------------------")
        }
      }  
    });
      }
        

        Closer(){
          this.rt.navigate(['']);
      }
}
