import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocalAssets{
   private geo_Url='assets/data/Country_City.json';
   
    constructor(private _http:Http){}

   getCountryDDowns():Observable<any[]>{
    return this._http.get(this.geo_Url)
            .map( (res:Response) => <any[]> res.json() )
            .catch(this.handleError);
   }

   private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}