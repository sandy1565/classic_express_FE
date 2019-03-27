import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { LocalAssets } from '../../../../services/LocalDataService';
import { Bookings, Item_groups } from '../../../../Blueprints/Order';
import { DataCourierService } from '../../../../services/CourierDataService';

@Component({
  selector: 'app-showcourier',
  templateUrl: './showcourier.component.html',
  styleUrls: ['./showcourier.component.css']
})
export class SuperadminShowcourierComponent implements OnInit {

Ord=[];
Cid="";
from="";
to="";
id="";
bdate="";
moder="";

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataCourierService){
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
}
 
ngOnInit() {
  this.svc.getAllOrders().subscribe( t => { this.Ord = t} );
}

}
