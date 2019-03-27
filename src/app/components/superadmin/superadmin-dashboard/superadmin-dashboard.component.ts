import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './superadmin-dashboard.component.html',
  styleUrls: ['./superadmin-dashboard.component.css']
})

export class DashboardSuperadminComponent {

  /*chartType:string;
  configData:any;
  barDataJson:any;
  barTypeName:string;

  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];*/

constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private router:Router) {
   this.navbaruser.hide();
   this.superadminsidebar.show();
   this.adminsidebar.hide();
   if(localStorage.getItem('Sadmin')==null){
    var x = prompt("Enter Password: ");
    if(x!=key){
      localStorage.clear();
      this.router.navigate(['unAuth']);
    }else{
      localStorage.setItem('Sadmin','200');
    }
   }
 }

 Logout(){
   localStorage.clear();
   this.router.navigate(['']);
 }

  // events
  /*public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */


 // Pie
 
  /*public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
 
  public chartClicked1(e:any):void {
    console.log(e);
  }
 
  public chartHovered1(e:any):void {
    console.log(e);
  }*/

}
const key="MasterMind234_1029";