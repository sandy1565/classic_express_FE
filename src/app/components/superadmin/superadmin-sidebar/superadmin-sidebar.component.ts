import { Component, OnInit } from '@angular/core';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';

declare var $: any;

@Component({
  selector: 'app-superadminsidebar',
  templateUrl: './superadmin-sidebar.component.html',
  styleUrls: ['./superadmin-sidebar.component.css']
})
export class SidebarSuperadminComponent{

 constructor(public superadminsidebar:SidebarSuperadminService ) 
 {
 	this.superadminsidebar.show();
 }
}
