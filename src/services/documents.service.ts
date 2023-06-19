import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DocumentsComponent} from '../app/documents/documents.component';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private _http : HttpClient) { }
 baseUrl ="";
  GetComments() 
  {
    return this._http.get<any[]>(this.baseUrl);
}
}