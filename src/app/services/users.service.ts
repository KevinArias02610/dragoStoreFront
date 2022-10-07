import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/negocio/users/users';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService
  ) { }

  getUsers(): Observable<Users>{
    let config = this.config.getConfig();
    const url = `https://localhost:7133/api/Users/getUsers`
    return this.httpClient.get<Users>(url);
  }
}
