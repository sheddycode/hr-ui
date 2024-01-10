import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  baseURL: string = environment.baseURL + '/auth';

  constructor(private http: HttpClient) { }

  registerEmployee(value: any): any {
    return this.http.post(this.baseURL + "/register", value)
  }


  login(payload: any) {
    return this.http.post(this.baseURL + '/login', payload)
  }
}
