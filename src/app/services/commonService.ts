import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {  Floor, Block, Location, State, Cities, Country } from '../Blueprints/commonModal';

import { environment } from '../../environments/environment';

const url_head = environment.url_head;

@Injectable()
export class CommonService {
  constructor(private http: HttpClient) {
  }

  public getCountryDetails(): Observable<Country[]> {
    return this.http.get(`${url_head}getCountryDetails`, {
      // headers: authHeader()
    }).pipe(map(data => < Country[]>data ));
  }

  public addCountry(country) {
    return this.http.post(`${url_head}country`,country, {
      // headers: authHeader()
    });
  }
  
  public updateCountry(id,country) {
    return this.http.put(`${url_head}country/${id}`,country, {
      // headers: authHeader()
    });
  }

  public deleteCountry(id){
    return this.http.delete(`${url_head}country/${id}`, {
      // headers: authHeader()
    });
  }

  public addState(state) {
    return this.http.post(`${url_head}state`,state, {
      // headers: authHeader()
    });
  }
  
  public updateState(id,state) {
    return this.http.put(`${url_head}state/${id}`,state, {
      // headers: authHeader()
    });
  }

  public deleteState(id){
    return this.http.delete(`${url_head}state/${id}`, {
      // headers: authHeader()
    });
  }

  public addDistricts(district){
    return this.http.post(`${url_head}district`, district, {
      // headers: authHeader()
    })
  }

  public getDistrictDetails(): Observable<State[]> {
    return this.http.get(`${url_head}district`, {
      // headers: authHeader()
    }).pipe(map(data => <State[]>data));
  }

  public addCity(city) {
    return this.http.post(`${url_head}city`,city, {
      // headers: authHeader()
    });
  }
  
  public updateCity(id,city) {
    return this.http.put(`${url_head}city/${id}`,city, {
      // headers: authHeader()
    });
  }

  public deleteCity(id){
    return this.http.delete(`${url_head}city/${id}`, {
      // headers: authHeader()
    });
  }


  public addDistrict(district) {
    return this.http.post(`${url_head}district`,district, {
      // headers: authHeader()
    });
  }
  
  public updateDistrict(id,district) {
    return this.http.put(`${url_head}district/${id}`,district, {
      // headers: authHeader()
    });
  }

  public deleteDistrict(id){
    return this.http.delete(`${url_head}district/${id}`, {
      // headers: authHeader()
    });
  }


  public addLocation(location) {
    return this.http.post(`${url_head}location`,location, {
      // headers: authHeader()
    });
  }
  
  public updateLocation(id,location) {
    return this.http.put(`${url_head}location/${id}`,location, {
      // headers: authHeader()
    });
  }

  public deleteLocation(id){
    return this.http.delete(`${url_head}location/${id}`, {
      // headers: authHeader()
    });
  }

  public addBlock(block) {
    return this.http.post(`${url_head}block`,block, {
      // headers: authHeader()
    });
  }
  
  public updateBlock(id,block) {
    return this.http.put(`${url_head}block/${id}`,block, {
      // headers: authHeader()
    });
  }

  public deleteBlock(id){
    return this.http.delete(`${url_head}block/${id}`, {
      // headers: authHeader()
    });
  }

  public addFloor(floor) {
    return this.http.post(`${url_head}floor`,floor, {
      // headers: authHeader()
    });
  }
  
  public updateFloor(id,floor) {
    return this.http.put(`${url_head}floor/${id}`,floor, {
      // headers: authHeader()
    });
  }

  public deleteFloor(id){
    return this.http.delete(`${url_head}floor/${id}`, {
      // headers: authHeader()
    });
  }

  public getStateDetails(): Observable<State[]> {
    return this.http.get(`${url_head}getState`, {
      // headers: authHeader()
    }).pipe(map(data => <State[]>data));
  }

  public getSpecificStateDetails(country_id): Observable<State[]> {
    return this.http.get(`${url_head}getState/${country_id}`, {
      // headers: authHeader()
    }).pipe(map(data => <State[]>data));
  }

  public getSpecificDistrictDetails(state_id) {
    return this.http.get(`${url_head}district/${state_id}`, {
      // headers: authHeader()
    }).pipe(map(data => data));
  }

  public getCitiesDetails(): Observable<Cities[]> {
    return this.http.get(`${url_head}getCities`, {
      // headers: authHeader()
    }).pipe(map(data => <Cities[]>data));
  }


  public getSpecificCitiesDetails(state_id): Observable<Cities[]> {
    return this.http.get(`${url_head}getCities/${state_id}`, {
      // headers: authHeader()
    }).pipe(map(data => <Cities[]>data));
  }
  

  public getFloor(): Observable<Floor[]> {
    return this.http.get(`${url_head}getFloor`, {
      // headers: authHeader()
    }).pipe(map(data => <Floor[]>data));
  }

  public getBlock(): Observable<Block[]> {
    return this.http.get(`${url_head}getBlock`, {
      // headers: authHeader()
    }).pipe(map(data => <Block[]>data));
  }

  public getLocation(locationData) {
    return this.http.post(`${url_head}getLocation`, locationData, {
      // headers: authHeader()
    });
  }

  public getSpecificLocationsDetails(location_id) {
    return this.http.get(`${url_head}getLocation/${location_id}`, {
      // headers: authHeader()
    });
  }


}