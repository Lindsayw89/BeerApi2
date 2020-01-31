import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url="https://api.punkapi.com/v2/beers"

  constructor(private httpClient : HttpClient) { }
async get(path) {
  return await this.httpClient.get(this.url + path).toPromise();
}

// async post(path, data, options){
//   return await this.httpClient.post(this.url + path, data, options).toPromise();
// }

}
