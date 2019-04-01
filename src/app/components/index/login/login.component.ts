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

  constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:LogService, private rt:Router, private Usvc:DataUserService,private ush:userDashboard, private Asc:DataAdminService){
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

  LoginSub(s){
    console.log("hiiii")
    if(this.trials==0){
      alert("You Ran Out Of Tries !!"); 
      this.rt.navigate(['']);
    }
    else if(s.role==ROLES.ADMIN){
      this.adObj = new AdminLogin(parseInt(s.id_name), s.pass);
      this.svc.adminCheck(this.adObj).subscribe( t => 
        {
          if(t.text()=="AdminFound"){
            localStorage.setItem('admin',JSON.stringify(parseInt(s.id_name)));
            this.Asc.GetAdminById(parseInt(s.id_name)).subscribe( t =>
             { 
              if(t.active){
                adminDashboard.adminId =  parseInt(localStorage.getItem('admin'));
                localStorage.setItem('adminCity',t.admincity);
                this.rt.navigate(['admin']);
              }else{
                  this.blocker=true;
              }
            }
          );
          }else{
            this.trials--;
            this.adChecker=false;
            this.usChecker=false;
            this.Checker=true;
          }
        }
      );
    }else if(s.role==ROLES.USER && !isNaN(s.id_name)){
      this.usObj = new UserLogin(parseInt(s.id_name), s.pass,"");
      this.svc.userCheck(this.usObj).subscribe( t => 
        {
          if(t.text()=="UserFound"){
              localStorage.setItem('user',JSON.stringify(parseInt(s.id_name)));

              this.Usvc.GetUserById(parseInt(s.id_name)).subscribe( t => 
              {
                if(t.ustat){
                  userDashboard.userid = parseInt(localStorage.getItem('user')); 
                  this.rt.navigate(['user']);
                }else{
                  this.blocker=true;
                }
              } 
            );
          }else{
            this.trials--;
            this.adChecker=false;
            this.usChecker=false;
            this.Checker=true;
          }
        });
      }else if(s.role==ROLES.USER) {
      // if( ( (<string>s.id_name).charAt(0)>='a' && (<string>s.id_name).charAt(0)<'z' ) || ((<string>s.id_name).charAt(0)>='A' && (<string>s.id_name).charAt(0)<='Z')){
            this.usObj = new UserLogin(0, s.pass, s.id_name);
            //console.log(this.usObj);
            this.svc.userMailCheck(this.usObj).subscribe( t =>
              {
                if(parseInt(t.text())!=0 && t.text()!="Nfound"){
                  localStorage.setItem('user',JSON.stringify(parseInt(t.text())));

                  this.Usvc.GetUserById(parseInt(t.text())).subscribe( t =>
                    {
                      if(t.ustat){
                        userDashboard.userid = parseInt(localStorage.getItem('user')); 
                        this.rt.navigate(['user']);
                      }
                      else{
                        this.blocker=true;
                      }
                    }
                  );
                }
              }

            );
          }
          else{
            this.usObj = new UserLogin(0, s.pass, s.id_name);
            //console.log(this.usObj);
            this.svc.userMailCheck(this.usObj).subscribe( t =>
              {
                if(parseInt(t.text())!=0 && t.text()!="Nfound"){
                  localStorage.setItem('user',JSON.stringify(parseInt(t.text())));

                  this.Usvc.GetUserById(parseInt(t.text())).subscribe( t =>
                    {
                      if(t.ustat){
                        userDashboard.userid = parseInt(localStorage.getItem('user')); 
                        this.rt.navigate(['user']);
                      }
                      else{
                        this.blocker=true;
                      }
                    }
                  );
                }
              }

            );


            // this.trials--;
            // this.adChecker=false;
            // this.usChecker=false;
            // this.Checker=true;
          }
        }

        Closer(){
          this.rt.navigate(['']);
      }
}
