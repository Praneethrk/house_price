import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { disableDebugTools } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseurl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  get_location_names(): Observable<any>{
    let url = `${this.baseurl}get_location_names`;
    return this.http.get(url);
  }

  predict_home_price(data): Observable<any>{
    let url = `${this.baseurl}predict_home_price`;
    return this.http.post(url,data)
  }
}
