import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

 constructor(public navbaruser:NavbarUserService ) 
    {  this.navbaruser.show();   }

}
