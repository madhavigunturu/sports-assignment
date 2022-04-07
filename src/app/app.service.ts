import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SportsResponse } from './sports-response.interface';
  
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url = 'https://ancient-wood-1161.getsandbox.com:443/results';
   
  constructor(public httpClient: HttpClient) { }
  
  getSportsData(): Observable<any> {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('API-Key', 'api-9471d239-efd3-4111-9039-d167a7699981');
    return this.httpClient.post<SportsResponse>(this.url, '', {'headers': headers});
  }
  
}