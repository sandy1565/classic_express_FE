import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {User_class} from '../Blueprints/uSer';
import { environment } from '../../environments/environment';
import { Roles } from './commonModel';

const url_head = environment.url_head;

@Injectable()
export class DataUserService
{
    private get_users_Url='api/showusers';
    private post_user_Url='api/newuser';
    private Update_user_Url='api/upUser/';
    private Delete_user_Url='api/delUser/';
    private User_access_url='api/permitUser/';
    private User_Obj_url= 'api/getUserObj/';
    private maxUser_url='api/getMaxUser';
    private user_otp_url='api/OTP_generate/';
    private User_passo_url='api/chUserPass/';

    constructor(private _http:Http, private http: HttpClient){}

    getUvals(): Observable<any[]>{
      return (this._http.get(url_head+this.get_users_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
   }

   postUser(nUser:User_class): Observable<Response>
   {
       let headers = new Headers({'Content-Type':'application/json'});
       let opts = new RequestOptions({headers : headers});
       return (this._http.post(url_head+this.post_user_Url, JSON.stringify(nUser), opts)
               .map( (res:Response) => res )
                .catch(this.handleError));            
   }

   DelUserById(t:number):Observable<Response>
    {
        return this._http.delete(url_head+this.Delete_user_Url+t.toString())
           .map((res:Response) => res)
           .catch(this.handleError);
    }

   UpdateUser(upuSer:User_class, x:number):Observable<Response>
    {
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
        return this._http.put(url_head+this.Update_user_Url+x.toString(),JSON.stringify(upuSer),opts)
                .map((res:Response) => res)
                .catch(this.handleError);
    }

    UserAccess(id:number, stat:Boolean):Observable<Response>{
        return this._http.get(url_head+this.User_access_url+id.toString()+"/"+stat)
           .map((res:Response) => res)
           .catch(this.handleError);
    }

    GetUserById(id:number):Observable<User_class>{
        return this._http.get(url_head+this.User_Obj_url+id.toString())
        .map( (res:Response) => <User_class> res.json() )
        .catch(this.handleError);
    }

    GetMaxUser():Observable<Response>{
        return this._http.get(url_head+this.maxUser_url)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    GenerateOTP(mob:string):Observable<Response>{
        return this._http.get(url_head+this.user_otp_url+mob)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    ChangeUserPass(id:number, pass:string):Observable<Response>{
        return this._http.get(url_head+this.User_passo_url+id.toString()+"/"+pass)
                .map( (res:Response) => res )
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

    public addUserDetails(userData) {
        // const user = {user:userData};
        return this.http.post(`${url_head}user`, userData);  
      }

    public getRoles(){
        return this.http.get(`${url_head}roles`)
    };
    
    public getCountryDetails() {
        return this.http.get(`${url_head}countries`);
    }

    public getStateDetails() {
        return this.http.get(`${url_head}states`)
    }

    public getCitiesDetails() {
        return this.http.get(`${url_head}cities`)
    }
        
}
