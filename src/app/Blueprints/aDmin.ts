export class Admin_class
{
    adminId:number;
    adminPass:string;
    admincity:string;
    adminctry:string;
    adminLat:number;
    adminLong:number;
    adminName:string;
    active:boolean;

    constructor(a:string, b:string, c:string, d:string, f:boolean)
    {   
        this.adminName=a;
        this.adminPass=b;
        this.admincity=c;
        this.adminctry=d;
        this.active=f;
    }
}