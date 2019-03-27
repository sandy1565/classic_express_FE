import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class NavbarUserService {

navbarVisible: boolean;

  constructor(private _http:Http) { this.navbarVisible = true; }

  hide() { this.navbarVisible = false; }

  show() { this.navbarVisible = true; }

  toggle() { this.navbarVisible = !this.navbarVisible; }
  
  static trackId=0;


}
