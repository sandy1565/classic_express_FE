import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { userDashboard } from '../../../services/UserDashService';
import { DataUserService } from '../../../services/UserDataService';
import { User_class } from '../../../Blueprints/uSer';

declare var $: any;

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {  

  username="";

  constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private svc:userDashboard, private rout:Router, private Dsvc:DataUserService){
   this.navbaruser.hide();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
  }
  
  ngOnInit() {
    $(".nav-folderized h4").click(function(){
	    $(this).parent(".nav").toggleClass("open"); 
	    $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
    });
    userDashboard.userid = parseInt(localStorage.getItem('user'));
    this.Dsvc.GetUserById(userDashboard.userid).subscribe( t => { this.username = t.userFname} );
  }

  Logout(){
    localStorage.clear();
    console.log("Tata");
    this.rout.navigate(['']);
  }

}
