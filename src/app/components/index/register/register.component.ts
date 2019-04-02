import { Component, OnInit } from '@angular/core';
import { NavbarUserService } from '../../../services/navbar-user.service';
import { SidebarSuperadminService } from '../../../services/sidebar-superadmin.service';
import { SidebarAdminService } from '../../../services/sidebar-admin.service';
import { DataCourierService } from '../../../services/CourierDataService';
import { DataUserService } from '../../../services/UserDataService';
import { Bookings, Item_groups } from '../../../Blueprints/Order';
import { Router } from '@angular/router';
import { User_class } from '../../../Blueprints/uSer';
import { LocalAssets } from '../../../services/LocalDataService';
import { Country } from 'app/Blueprints/commonModal';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regDiv=true;
  Tprog=false;
  Fprog=false;
  trackDiv=false;
  trackFoot=true;
  Ctcontrol=true;
  Cfcontrol=true;
  uAdd={
        fromcountry:"",
        fromcity:"",
        fromstreet:""
        };
  CrAdd={
        fromcountry:"",
        fromcity:"",
        fromstreet:""
        };
  Roles = [];
  DDown=[];
  fcities=[];
  tcities=[];
  Arr=Array<Item_groups>();
  Ord:Bookings;
  Uid:number;
  userObj:User_class;
  Tweight=0;
  Tprice=0;
  bmode="";
  CurCh=true;
  Ccontrol=true;
  states = [];
  cities= [];
  empty="";
  password="";
  cpassword="";
  Ccode=0;
  PhNum;
  selectedCountry;
  selectedCity;
  selectedState;
  selectedStateName;
  countries:any = [];
  countryList;

 constructor(private navbaruser:NavbarUserService,private superadminsidebar:SidebarSuperadminService,private adminsidebar: SidebarAdminService, private rt:Router,private svc:DataCourierService, private lvc:LocalAssets, private usvc:DataUserService){
   this.trackDiv=false;
   this.trackFoot=true;
   this.CurCh=true;
   this.navbaruser.show();
   this.superadminsidebar.hide();
   this.adminsidebar.hide();
   lvc.getCountryDDowns().subscribe( t => {this.DDown = t} );
  //  console.log(this.DDown);
   this.Arr.push(new Item_groups("",1,0,0,""));
 }

  ngOnInit() {
    $(".nav-folderized h4").click(function(){
	    $(this).parent(".nav").toggleClass("open"); 
	    $('html, body').animate({ scrollTop: $(this).offset().top - 170 }, 1500 );
    });

    this.usvc.getRoles().subscribe((resp:any) =>{
      console.log(resp.roles);
      this.Roles = resp.roles;
      console.log(this.Roles);
    });

    // console.log(this.usvc.getCountryDetails().subscribe(res=>this.countryList=res));
    //  this.countryList);

    this.usvc.getCountryDetails().subscribe(countryList => {
      localStorage.setItem('countryDetails', JSON.stringify(countryList));
    });

    console.log(localStorage.getItem('countryDetails'));

    this.usvc.getStateDetails().subscribe(statesList => {
      localStorage.setItem('stateDetail', JSON.stringify(statesList));
    });

    this.usvc.getCitiesDetails().subscribe(cityList => {
      localStorage.setItem('cityDetails', JSON.stringify(cityList));
    });
  }

  ngAfterViewInit(){
    $('.otp input').on('keyup change', function(){
      let t = $(this);
      if (t.val().length > 0) {
        t.next().focus();
      }
    });
  }
  ngAfterViewChecked() {
    $('.numeridot').keypress(function(key) {
        if((key.charCode < 48 || key.charCode > 57) && (key.charCode != 46)) return false;
    });

    $('.numeri').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

    $('.alpha_bet').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) return false;
    });

    $('.moby').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

  }

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.states = this.getStates().filter(item => {
      return item.country_id === Number(country_id);
    });
    this.cities = [];
  }

   onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.selectedStateName = this.selectedState;
    this.cities = this.getCity().filter(item => {
      return item.state_id === Number(state_id);
    });
    this.cities = [];
  }

  onSelectCity(city_id: number) {
    this.selectedCity = city_id;
  }

    getCountries() {
      return localStorage.getItem('countryDetails');
    }
  
    getStates() {
      console.log('get states ==========================');
      return JSON.parse(localStorage.getItem('stateDetail'));
    }
  
    getDistrict() {
      return JSON.parse(localStorage.getItem('districtDetails'));
    }
  
    getCity() {
      console.log('=================== getCity()');
      return JSON.parse(localStorage.getItem('cityDetails'));
    }

    

  // submitOtp(otp){
  //   if(otp.length != 4){
  //     return;
  //   }
  //   console.log(otp);
  // }

  Direct(){
    //console.log("Opening Track Panel ");
    this.regDiv=false;
    this.trackDiv=true;
  }

  Extns(){
  if(this.Arr.length<6){
    this.Arr.push(new Item_groups("",1,0,0,""));
    this.trackFoot=true;
    }else{
      alert("Groups Limit Reached");
    }
  }

FormSub(t){
  this.Ord = new Bookings(this.Uid,t.fstreet, t.fcity,t.fcountry,t.tstreet, t.tcity, t.tcountry,this.Tweight, this.Tprice,new Date(), null,this.bmode, "Waiting For Pickup",this.Arr);
  //console.log(this.Ord);
  this.usvc.postUser(this.userObj).subscribe( t => {
        if(t.text()=="Posted"){
          this.svc.postOrder(this.Ord).subscribe(dt => {
           
                if(dt.text()=="Posted"){
                
                  alert("Booking & Registration Successfull");
                }else{
                  alert("Booking Failed. Please Try After Some Time");
                  this.rt.navigate(['']);
                }
          });  
        }else{
          alert("Registration Failed");
          this.rt.navigate(['']);
        }
      }
   )
  
  this.trackDiv=false;
  this.Fprog=true;
}

RedLogin(){
  this.rt.navigate(['login']);
}

Closer(){
  this.rt.navigate(['']);
}

dimChange(a,b,c,d){
  if(parseInt(a)>0 && parseInt(b)>0 && parseInt(c)>0){
    this.Arr[d].dimension=(a+"x"+b+"x"+c);
  }
}

qtyChange(a,b){
  this.Arr[b].noOfItems = parseInt(a);
}

WtChange(a,b){
  this.Arr[b].weightPerItem = parseInt(a);
}

prChange(a,b){
  this.Arr[b].pricePerItem = parseInt(a);
}

typeChange(a,b){
  this.Arr[b].type = a;
}

PrefChange(a){
  switch (a)
  {
    case "Standard":{
      this.bmode="Cargo";
      break;
    }

    case "Express":{
      this.bmode="Air";
    }

    case "Custom":{
      this.bmode="Ship";
      break;
    }

    default:{
      this.bmode="Cargo";
      break;
    }
  }
  this.Tprice=0;
  this.Tweight=0;
  this.calcPrice();
  this.calcWeight();
}

Dxtns(){
    if(this.Arr.length==1 || this.Arr.length==0){
      this.Arr.length=0;
    this.trackFoot=false;}
    else{
      this.Arr.length--;
    }
  }

  calcWeight(){
    for(var x=0;x<this.Arr.length;x++){
      this.Tweight+=Math.round(this.Arr[x].weightPerItem*this.Arr[x].noOfItems);
    }
  }

  calcPrice(){
    for(var x=0;x<this.Arr.length;x++)
      {
            this.Tprice+=Math.round(this.Arr[x].pricePerItem*this.Arr[x].noOfItems);
      }
      this.Tprice+=(0.2)*this.Tprice;
  }

  FromCtrChange(s){
  this.Cfcontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.fcities =  this.DDown[x].Cities;
    }
  }
}

ToCtrChange(s){
    //console.log(s);
    this.Ctcontrol=false;
    for(var x=0; x<this.DDown.length;x++){
      if(s==this.DDown[x].Country){
        this.tcities =  this.DDown[x].Cities;
      }
    }
  }

  AddChange(s){
    if(s){
      this.uAdd.fromcountry = this.CrAdd.fromcountry;
      this.FromCtrChange(this.CrAdd.fromcountry); 
      this.uAdd.fromcity=this.CrAdd.fromcity; 
      this.uAdd.fromstreet=this.CrAdd.fromstreet;
    }else{
      this.uAdd.fromstreet="";
      this.Cfcontrol=true;
      this.uAdd.fromcity="";
      this.uAdd.fromcountry="";
    }
  }


  LogMe(){
    this.rt.navigate(['/login']);
  }

  CtrChange(s){
  this.Ccontrol=false;
  for(var x=0; x<this.DDown.length;x++){
    if(s==this.DDown[x].Country){
      this.cities =  this.DDown[x].Cities;
      this.Ccode = this.DDown[x].Ccode;
    }
  }
}

onSubmit(data) {
    this.usvc.addUserDetails(data).subscribe(data => {
      console.log('data added', data);
      alert('abc');
      console.log('added successfully');
    },(err:any)=>{
      alert( err);
    });
  }
  // }
// }


  // sGetUser(t){
  //   alert("test")
  //   this.userObj = new User_class(t.fname, t.lname, t.pass, t.gender, parseInt(t.mcc), parseInt(t.mob),t.email,t.street,t.city,t.country,true);
  //   //console.log(this.userObj);
  //   this.usvc.GetMaxUser().subscribe( t => {
  //     this.Uid = parseInt(t.text())+1
  //     // $("#launchOtp").click();
  //     // this.regDiv=false;
  //     // this.Tprog=true;
  //   },e=>{
  //     // $("#launchOtp").click();
  //     // this.regDiv=false;
  //     // this.Tprog=true;
  //   });
  //   this.CrAdd.fromcountry = t.country;
  //   this.CrAdd.fromcity = t.city;
  //   this.CrAdd.fromstreet = t.street;

  // }

  Trackon(){
    this.Tprog=false;
    this.trackDiv=true;
  }

  ShoPass(){
    var x = <HTMLInputElement>document.getElementById("passo1");
    var y = <HTMLInputElement>document.getElementById("passo2");
 
      if(x.type == "password"){
        x.type = "text";
        y.type = "text";
      }else{
        x.type = "password";
        y.type = "password";  
      }
  }

  Pconv(){
    if(this.CurCh){
      this.Tprice = Math.round(this.Tprice/65);
      this.CurCh=false;
    }else{
      this.Tprice = Math.floor(this.Tprice * 65);
      this.CurCh=true; 
    }
  }
}