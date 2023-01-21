import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  
  sentMessage(message: any): Observable<any>{
    return this.http.post<any>(environment.sendmessageurl, message)
  }
}
