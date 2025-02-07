import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://dog.ceo/api';

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getProduct(id: number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }
  getRandomDogs(count: number = 10): Observable<{ message: string[]; status: string }>{
    return this._http.get<{ message: string[]; status: string }>(`${this.urlBase}/breeds/image/random/${count}`);
  }
}
