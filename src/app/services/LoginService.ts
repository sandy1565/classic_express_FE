import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { UserLogin, AdminLogin } from '../Blueprints/Login';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
const url_head = environment.url_head;

@Injectable()
export class LogService{
    private adminCheckUrl="api/adminLogin";
    private userCheckUrl="api/userLogin";
    private userMailCheckUrl="api/userLoginMail";

    constructor(private _http:Http, private http:HttpClient){}

    adminCheck(admin:AdminLogin):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
  
        return this._http.post(url_head+this.adminCheckUrl, JSON.stringify(admin), opts)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    userCheck(user:UserLogin):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
  
        return this._http.post(url_head+this.userCheckUrl, JSON.stringify(user), opts)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    userMailCheck(user:UserLogin):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
  
        return this._http.post(url_head+this.userMailCheckUrl, JSON.stringify(user), opts)
                .map( (res:Response) => res )
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }

    getLogin(u) {
        return this.http.post(`${url_head}user/login`,u );
      }
}