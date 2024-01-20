import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarResponseModel } from '../../models/carResponseModel';
import { response } from 'express';
import { CarService } from '../../services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService){}
  
  ngOnInit():void {

    this.getCars()
  }
  getCars(){

    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
    })
  }
}
