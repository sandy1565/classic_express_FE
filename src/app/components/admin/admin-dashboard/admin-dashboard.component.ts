import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { LocalAssets } from '../../../services/LocalDataService';
import { DataAdminService } from '../../../services/AdminDataService';
import {adminDashboard} from '../../../services/AdminDashService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class DashboardAdminComponent implements OnInit {

Ccontrol=true;
  DDown=[];
  cities=[];
  Darr:any={};
  chartType:string;
  configData:any;
  barDataJson:any;
  barTypeName:string;
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


 constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private Csvc:LocalAssets, private _rout:Router, private adSvc:DataAdminService) {
   this.navbaruser.hide();
   this.superadminsidebar.hide();
   this.adminsidebar.show();
 }

ngOnInit() 
{
  adminDashboard.adminId =  parseInt(localStorage.getItem('admin'));
  this.Csvc.getCountryDDowns().subscribe( t => {this.DDown = t} );
  this.adSvc.GetAdminById(adminDashboard.adminId).subscribe( t => {this.Darr = t; this.CtrChange(this.Darr.adminctry)} );
}
 
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }
 
  public randomize():void {
    let data = [Math.round(Math.random() * 100),59,80,(Math.random() * 100),56,(Math.random() * 100),40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
 
  public chartClicked1(e:any):void {
    //console.log(e);
  }
 
  public chartHovered1(e:any):void {
    //console.log(e);
  }

  CtrChange(s){
  //console.log(s);
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
    }
  }
}

Logout(){
  localStorage.clear();
  console.log("Bye ");
  this._rout.navigate(['/login']);
}

}
