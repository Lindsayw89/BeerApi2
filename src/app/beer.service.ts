import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpHeaders} from '@angular/common/http';
import {Ibeer} from './interfaces/ibeer';


@Injectable({
  providedIn: 'root'
})
export class BeerService {
BEER_DATA: Ibeer[]=[
  {name: 'Bob', tagline: 'nice and wheaty', description: 'will get you drunk o a budget', abv: 6},
    
]
  constructor(private apiService : ApiService) { }

  async getAll(){
    let data = await this.apiService.get("beers");
    return data
  }
  
}
