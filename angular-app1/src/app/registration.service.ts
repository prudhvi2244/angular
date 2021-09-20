import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  register(registration)
  {
     return this._http.post('http://localhost:8080/customer/register',registration);
  }

}
