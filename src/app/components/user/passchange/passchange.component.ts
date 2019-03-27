import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../../services/UserDataService';
import { userDashboard } from '../../../services/UserDashService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})
export class PasschangeComponent implements OnInit {

  cur_pass="";
  new_pass="";
  con_pass="";
  mob:string="";
  otp="";
  gotp="";
  rowOn=true;
  newmob="";
  Darr:any={};
  Checker=false;
  blocker=false;
  OTP_dialog=false;

  constructor(private Usvc:DataUserService, private rout:Router) {
    this.Checker=false;
    this.blocker=false;
    this.OTP_dialog=false;
    this.rowOn=true;
   }

  ngOnInit() {
    userDashboard.userid = parseInt(localStorage.getItem('user'));
    this.Usvc.GetUserById(userDashboard.userid).subscribe( t => {this.Darr = t ; this.mob =t.userMob.toString() ; this.mobMask()} );
  }

  ShoPass(){
    var x = <HTMLInputElement>document.getElementById("npass");
    var y = <HTMLInputElement>document.getElementById("conpass");
 
      if(x.type == "password"){
        x.type = "text";
        y.type = "text";
      }else{
        x.type = "password";
        y.type = "password";  
      }
  }

  Pchange(){
    if(this.cur_pass!=this.Darr.userPass){
      this.OTP_dialog=false;
      this.blocker=false;
      this.Checker=true;
    }
    else if(this.new_pass!=this.con_pass){
      this.OTP_dialog=false;
      this.Checker=false;
      this.blocker=true;
    }else{
      this.Checker=false;
      this.blocker=false;
      this.OTP_dialog=true;
    }
  }

  mobMask(){
  for(var x=0;x<10;x++){
    if(x>=7){
      this.newmob+=this.mob.charAt(x);
    }else{
      this.newmob+="*";
    }
  }
}

SendOTP(){
  this.Usvc.GenerateOTP(this.mob).subscribe( t => {this.gotp = t.text()});
  this.rowOn=false;
}

Confirm(){
  if(this.gotp = this.otp){
    this.Usvc.ChangeUserPass(userDashboard.userid, this.new_pass).subscribe( t =>
      {
        if(t.text()=="Pass_Changed"){
          alert("Password Changed !!! Use new Password to Login Next Time");
          this.rout.navigate(['user']);
        }else{
          alert("Some Error Occured. Please Try After Some Time");
          this.rout.navigate(['user']);
        }
      }
    )
  }else{
    alert("OTP mismatch. Try After Some Time");
    this.rout.navigate(['user']);
  }
}

}