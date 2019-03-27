import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Bookings, Item_groups} from '../Blueprints/Order';
import { environment } from '../../environments/environment';

const url_head = environment.url_head;

@Injectable()
export class DataCourierService
{
    private get_cors_Url='assets/data/courier.json';
    private user_check_Url='api/checkUser/';
    private book_Url="api/postBooking";
    private getAdminlink_url='api/getAdminOrders/';
    private order_cStat_url='api/statusChange/'
    private get_orders_url='api/getAllOrders';
    private getUcity_url='api/getUserCity/';
    private TrackO_url='api/getTrackoObj/';

    constructor(private _http:Http){}

    getCorVals(): Observable<any[]>{
      return (this._http.get(url_head+this.get_cors_Url)
      .map((response: Response) => <any[]> response.json())
      .catch(this.handleError));
    }

    postOrder(ord:Bookings):Observable<Response>{
        let headers = new Headers({'Content-Type':'application/json'});
        let opts = new RequestOptions({headers : headers});
       
        return this._http.post(url_head+this.book_Url, JSON.stringify(ord),opts)
            .map((res:Response) => res)
            .catch(this.handleError);

    }

    checkUser(x:number):Observable<Response>{
        return this._http.get(url_head+this.user_check_Url+x.toString())
        .map((res:Response) => res)
        .catch(this.handleError);
    }

    getAdminCors(id:number):Observable<any[]>{
        return this._http.get(url_head+this.getAdminlink_url+id.toString())
        .map((res:Response) => <any[]>res.json())
        .catch(this.handleError);
    }

    OrderStatusChange(cid:number, pstat, cstat):Observable<Response>{
        return this._http.get(url_head+this.order_cStat_url+cid.toString()+"/"+pstat+"/"+cstat)
        .map((res:Response) => res)
        .catch(this.handleError);
    }

    getAllOrders():Observable<Bookings[]>{
        return this._http.get(url_head+this.get_orders_url)
                .map( (res:Response) => <Bookings[]>res.json() )
                .catch(this.handleError);
    }

    getUserCity(id:number):Observable<Response>{
        return this._http.get(url_head+this.getUcity_url+id.toString())
                .map( (res:Response) => res)
                .catch(this.handleError);
    }

    getTrackData(id:number):Observable<Response>{
        return this._http.get(url_head+this.TrackO_url+id.toString())
                .map( (res:Response) => res)
                .catch( this.handleError );
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
