import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/login";
  currentuserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion está corriendo");
    this.currentuserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentuser') || '{}'))
  }

  IniciarSesion(credenciales:any):Observable<any> 
  {
    return this.http.post(this.url, credenciales
  ).pipe(map(data=> {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
