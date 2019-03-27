import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../../services/sidebar-admin.service';
import { Bookings, Item_groups } from '../../../../Blueprints/Order';
import { DataCourierService } from '../../../../services/CourierDataService';

@Component({
  selector: 'app-showpayment',
  templateUrl: './showpayment.component.html',
  styleUrls: ['./showpayment.component.css']
})
export class SuperadminShowpaymentComponent implements OnInit {

P_arr=[];
U_id="";
O_id="";
Pstat="";
stat:boolean;

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService,private svc:DataCourierService){
this.navbaruser.hide();
this.superadminsidebar.show();
this.adminsidebar.hide();
}

ngOnInit() {
    this.svc.getAllOrders().subscribe( t => { this.P_arr = t } );
}

StatChange(s){
  if(s=="Remaining"){
    this.stat=false;
  }else if(s==""){
    this.stat=undefined;
  }else{
    this.stat=true;
  }
}

}
