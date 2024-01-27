import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = environment.baseURL + '/auth';

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.baseURL + '/users');
  }

}
