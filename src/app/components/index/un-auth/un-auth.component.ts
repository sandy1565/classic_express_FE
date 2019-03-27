import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';

@Component({
  selector: 'app-un-auth',
  templateUrl: './un-auth.component.html',
  styleUrls: ['./un-auth.component.css']
})
export class UnAuthComponent implements OnInit {

  constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService){
          this.navbaruser.show();
          this.superadminsidebar.hide();
          this.adminsidebar.hide();
  }
  ngOnInit() {
  }

}
