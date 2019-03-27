import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService){
this.navbaruser.show();
this.superadminsidebar.hide();
this.adminsidebar.hide();
}


  ngOnInit() {
  }

}
