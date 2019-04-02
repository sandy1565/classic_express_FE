import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Admin_class } from '../Blueprints/aDmin';
import { environment } from '../../environments/environment';
import { authHeader } from '../../environments/authHeader';
const url_head = environment.url_head;

@Injectable()
export class DataAdminService
{   
   private get_admins_Url='api/showadmins';
   private post_admin_Url='api/newadmin';
   private Update_admin_Url='api/upAdmin/';
   private Delete_admin_Url='api/delAdmin/';
   private Admin_access_Url='api/permitAdmin/';
   private Admin_Obj_Url='admin';
   private Prox_Users_Url='api/User_City/';
   private Admin_passo_Url='api/chAdminPass/';

   constructor(private _http:Http){}

   getAdvals(): Observable<any[]>{
      return (this._http.get(url_head+this.get_admins_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
   }

   postAdmin(nAdmin:Admin_class): Observable<Response>
   {
       let headers = new Headers({'Content-Type':'application/json'});
       let opts = new RequestOptions({headers : headers});
       return (this._http.post(url_head+this.post_admin_Url, JSON.stringify(nAdmin), opts)
               .map((res:Response) => res)
                .catch(this.handleError));            
   }

   DelAdminById(t:number):Observable<Response>
    {
        return this._http.delete(url_head+this.DelAdminById+t.toString())
           .map((res:Response) => res)
           .catch(this.handleError);
    }

   UpdateAdmin(uAdmin:Admin_class, x:number):Observable<Response>
    {
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
        return this._http.put(url_head+this.Update_admin_Url+x.toString(),JSON.stringify(uAdmin),opts)
                .map((res:Response) => res)
                .catch(this.handleError);
    }

    AdminAccess(id:number, stat:Boolean):Observable<Response>{
        return this._http.get(url_head+this.Admin_access_Url+id.toString()+"/"+stat)
           .map((res:Response) => res)
           .catch(this.handleError);
    }

    // +id.toString()
    GetAdminById(id:number):Observable<Admin_class>{
        return this._http.get(url_head+this.Admin_Obj_Url)
        .map( (res:Response) => <Admin_class> res.json(), { headers: authHeader()})
        .catch(this.handleError);
       
    }

    ChangeAdminPass(id:string, newPass):Observable<Response>{
        return this._http.get(url_head+this.Admin_passo_Url+id+"/"+newPass)
            .map((res:Response) => res)
           .catch(this.handleError);
    }

    getCityUsers(city:string):Observable<any[]>{
        return this._http.get(url_head+this.Prox_Users_Url+city)
                .map( (res:Response) => <any[]>res.json() )
                .catch(this.handleError);
    }
  
    private extractData(res: Response) {
    let body = res.json();
            return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
} 