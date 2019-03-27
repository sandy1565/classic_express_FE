import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

const url_head = environment.url_head;

@Injectable()
export class userDashboard{
 
    static userid=0;
    static orderid=0;
    static trackid=0;

    private user_order_Url='api/getUserOrders/';
    private usertrackO_url='api/getTrackoObj/';
    private userTrackOrd_url='api/getTrackOrder/';

    constructor(private _http:Http){}

    getUserOrders(id:number):Observable<any[]>{
        return this._http.get(url_head+this.user_order_Url+id.toString())
                .map( (res:Response) => <any[]>res.json() )
                .catch(this.handleError);
    }

    getTrackData(id:number):Observable<Response>{
        return this._http.get(url_head+this.usertrackO_url+id.toString())
                .map( (res:Response) => res)
                .catch( this.handleError );
    }

    getTrackOrder(id:number):Observable<Response>{
        return this._http.get(url_head+this.userTrackOrd_url+id.toString())
                .map( (res:Response) => res)
                .catch( this.handleError );
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}