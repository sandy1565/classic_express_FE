import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { Router} from '@angular/router';
import {DataCourierService} from '../../../services/CourierDataService';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Harr=[];

 constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private router:Router, private Tsc:DataCourierService) {
   this.navbaruser.show();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
 }

 /*  Toggling Footer */
 ngOnInit()
  {
    $(".nav-folderized h4").click(function(){
	    $(this).parent(".nav").toggleClass("open"); 
	    $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
    });
  }

  ngAfterViewChecked() {
    $('.moby').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });
  }

  Tracko(s:number){
    this.Tsc.getTrackData(s).subscribe( t => 
      {
       if(t.text()==""){
          alert("Invalid Track ID");
          this.router.navigate(['']);      
        }else{
          NavbarUserService.trackId = s;
          localStorage.setItem('Itrack',s.toString());
          this.router.navigate(['qTrack']);
        }
      } 
    );
  }
}
