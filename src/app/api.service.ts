import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// remember to be careful of the default path
url="https://api.punkapi.com/v2/"

  constructor(private httpClient : HttpClient) { }
async get(path) {
  // this will call 'https://api/punkapi.com/v2/{path}'
  // remember my last comment, if you pass a path into this and
  // do 'url + path' it acts just like a string. that's why you got /beer/beer
  return await this.httpClient.get<any>(this.url + path).toPromise();
}

// async post(path, data, options){
//   return await this.httpClient.post(this.url + path, data, options).toPromise();
// }

}
