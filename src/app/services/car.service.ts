import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl='https://localhost:7260/api/'

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{

    let newPath=this.apiUrl +"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  
    }

    getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl +"cars/getcarsbybrandid?brandid="+brandId

      return this.httpClient.get<ListResponseModel<Car>>(newPath)
    
      }
  }

