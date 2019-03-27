import { Pipe, PipeTransform } from '@angular/core';

//Admin Pipes
@Pipe({name: 'adminPipe'})
export class AdminPipe implements PipeTransform
{
    transform(Arr:any[], sT1:string, sT2:string, sT3:string): any[]
    {
        return Arr.filter(t => t.adminId.toString().startsWith(sT1) && t.adminName.toString().toLowerCase().match(sT2.toLowerCase()) &&
                            t.admincity.toLowerCase().match(sT3.toLowerCase()));
    }    
}
    

//User Pipe
@Pipe({name: 'userPipe'})
export class UserPipe implements PipeTransform
{
    transform(items:any[],  sT1: string, sT2:string,sT3:string): any[]
    {
        return items.filter(s => s.userId.toString().startsWith(sT1) && (s.userFname+" "+s.userLname).toLowerCase().match(sT2.toLowerCase()) 
                &&  s.userMail.toLowerCase().match(sT3.toLowerCase()));
    }
}

@Pipe({name: 'bookingPipe'})
export class BookPipe implements PipeTransform
{
    transform(Arr:any[], a1:string, a2:string, a3:string, a4:string, a5:string, a6:string) :any[]
    {
        return Arr.filter( s => s.conId.toString().startsWith(a1) && s.userId.toString().startsWith(a2) 
                          && ((s.fromStreet)+", "+(s.fromCity)+", "+(s.fromCountry)).toString().toLowerCase().match(a3.toLowerCase())
                          && ((s.toStreet)+", "+(s.toCity)+", "+(s.toCountry)).toString().toLowerCase().match(a4.toLowerCase())  
                          && s.bDate.toString().match(a5) && s.mode.match(a6)  );
    }
}

@Pipe({name: 'pyPipe'})
export class PymentPipe implements PipeTransform
{
    transform(Arr: any[], a1:string, a2: string, a3:boolean) : any[]
    {
        if(a3==undefined){
            return Arr.filter( s =>  s.userId.toString().startsWith(a1) && s.conId.toString().startsWith(a2) );
        }else{
            return Arr.filter( s =>  s.userId.toString().startsWith(a1) && s.conId.toString().startsWith(a2) && (s.pystat == a3) );
        }
    }
}
