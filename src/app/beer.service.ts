import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpHeaders} from '@angular/common/http';
import {Ibeer} from './interfaces/ibeer';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

    

  constructor(private apiService : ApiService) { }

  async getAll(){
    let data = await this.apiService.get("beers");
    return data
  }
  
}
