import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Comment} from '../model/comment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
constructor(private _http : HttpClient) { }
comments : Comment[] = [];
 baseUrl ="http://localhost:5161/api/Comments";
  GetComments() : Observable<Comment[]>
  {
    return this._http.get<Comment[]>(this.baseUrl);
}
};