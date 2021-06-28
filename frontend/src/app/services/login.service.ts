import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getLogin():Observable<User>{
    return this.http.get<User>(`/api/login`)
  }

  setLogin(id: string, username: string, password: string):Observable<User>{
    let user = new User();
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    user._id=id;
    user.username=username;
    user.password=password;
    console.log('USER',user)
    let usee = JSON.stringify(user)
    return this.http.post<User>(`/api/login`, usee,{headers: headers});
  }
}
