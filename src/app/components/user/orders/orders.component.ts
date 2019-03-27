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
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  u_Ords=[];
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
    //this.svc.getDataSvc().subscribe( t => {this.DaRR = t} );
    this.svc.getUserOrders(userDashboard.userid).subscribe( t => {this.u_Ords = t} );
  }

  NaviRepo(s:number, t:number){
    localStorage.setItem('CurOrd',s.toString());
    localStorage.setItem('ITrack',t.toString());
    this.rout.navigate(['/user','userTrackRepo']);
  }

}
