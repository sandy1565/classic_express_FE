import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import {adminDashboard} from '../../../../services/AdminDashService';
import { DataAdminService } from '../../../../services/AdminDataService';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class AdminShowuserComponent implements OnInit {

UsArr=[];

  constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private AdSvc:DataAdminService){
      this.navbaruser.hide();
      this.superadminsidebar.hide();
      this.adminsidebar.show();
      adminDashboard.adminId =  parseInt(localStorage.getItem('admin'));
      adminDashboard.adminCity = localStorage.getItem('adminCity');
  }

 
  ngOnInit() {
    this.AdSvc.getCityUsers(adminDashboard.adminCity).subscribe( t => {this.UsArr = t} );
  }

}
