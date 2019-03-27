import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate{
    
    constructor(private rout:Router){

    }

    canActivate(){
        if(localStorage.getItem('user')!=null){
            console.log("User Logged In");
            return true;
        }
        else if(localStorage.getItem('admin')!=null){
            console.log("Admin Logged In");
            return true;
        }
        else if(localStorage.getItem('Itrack')!=null){
            console.log("Quick Courier Track");
            return true;
        }
        else{
            this.rout.navigate(['unAuth']);
            return false;
        }
    }
}