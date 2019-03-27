export class UserLogin{
    userId:number;
    userPass:string;
    umail:string;
    ustat:boolean;

    constructor(a:number, b:string, c:string){
        this.userId=a;
        this.userPass=b;
        this.umail=c;
    }
}

export class AdminLogin{
    adminId:number;
    adminPass:string;
    adstat:boolean;

    constructor(a:number, b:string){
        this.adminId=a;
        this.adminPass=b;
    }
}