import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { submitTravelRequest } from '../model/submitTravelRequest';


@Injectable({
  providedIn: 'root'
})


export class  TravelRequestService {
  constructor(private _http : HttpClient) { }
  submittravelrequest :submitTravelRequest [] = [];
   baseUrl ="http://localhost:5161/api/ApplicationRequests";
    GetComments() : Observable<submitTravelRequest[]>
    {
      return this._http.get<submitTravelRequest[]>(this.baseUrl);
  }

  
  createTravelRequest(request: submitTravelRequest): Observable<any> {
    return this._http.post(this.baseUrl, request);
  }
  
  };
