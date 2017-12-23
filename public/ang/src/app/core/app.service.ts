import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {

  }

  getCategoriesForHomePage(): Observable<any> {
    return this.http.get('/api/category/home');
  }

  getCategoryProducts(categoryId): Observable<any> {
    return this.http.get(`/api/category/${categoryId}/products`);
  }

  getProductData(productId): Observable<any> {
    return this.http.get(`/api/product/${productId}`);
  }

  getCategoryData(categoryId): Observable<any> {
    return this.http.get(`/api/category/${categoryId}`)
  }
}
