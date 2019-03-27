import { Component, OnInit } from '@angular/core';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class SidebarAdminComponent implements OnInit {


 constructor(public adminsidebar:SidebarAdminService ) 
 {
 	this.adminsidebar.show();
 }

  ngOnInit() {
  }
  
}
