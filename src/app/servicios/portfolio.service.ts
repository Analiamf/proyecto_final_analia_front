import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url="http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public obtenerDatos(id: number): Observable<any> {
    return this.http.get<any>(this.url + `persona/${id}`);
  }

  delete(id: number) {
    console.log("AGREGAR DELETE");
    alert("agregar delete");
  }
}
