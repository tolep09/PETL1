import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/appconstants';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private  resourceUrl = AppConstants.API_BASE_URL;
  private resourceID = AppConstants.API_ID;
  private proxyUrl = 'crud';

  constructor(private http: HttpClient) { }

  queryCrud(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.resourceUrl + '/' + this.resourceID + '/unicorns', {observe: 'response'});
  }

  getCrud(id: string): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.proxyUrl + '/' + this.resourceID + '/unicorns/' + id, {observe: 'response'});
  }

  postCrud(crud: any): Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.proxyUrl + '/' + this.resourceID + '/unicorns', crud,
    {headers: httpHeaders, observe: 'response'});
  }

  putCrud(crud: any, id: string): Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    delete(crud._id);
    return this.http.put<any>(this.proxyUrl + '/' + this.resourceID + '/unicorns/' + id, crud, 
    {headers: httpHeaders, observe: 'response'});
  }

  deleteCrud(id: string): Observable<HttpResponse<any>> {
    return this.http.delete(this.proxyUrl + '/' + this.resourceID + '/unicorns/' + id, {observe: 'response'});
  }
}
