export class User_class
{
    userFname:string;
    userLname:string;
    userPass:string;
    userGender:string;
    mobcode:number;
    userMob:number;
    userMail:string;
    ustreet:string;
    ucity:string;
    ucountry:string;
    ustat:boolean;

    constructor(fname:string, lname:string, pass:string, gender:string, mobcode:number, mob:number, mail:string, street:string, city:string, ctry:string, stat:boolean){
        this.userFname=fname;
        this.userLname=lname;
        this.userPass=pass;
        this.userGender=gender;
        this.mobcode = mobcode;
        this.userMob=mob;
        this.userMail=mail;
        this.ustreet = street;
        this.ucity = city;
        this.ucountry = ctry;
        this.ustat =stat;
    }
}