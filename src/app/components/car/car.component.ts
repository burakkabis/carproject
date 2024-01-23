import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { response } from 'express';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];

  filterText="";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService){}
  
  ngOnInit():void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      else
      {
        this.getCars()
      }
    })

  }
  getCars(){

    this.carService.getCars().subscribe(response =>{
      this.cars=response.data
    })
  }

  getCarsByBrandId(brandId:number){

    this.carService.getCarsByBrandId(brandId).subscribe(response =>{
      this.cars=response.data
    })
  }

  addToCart(car:Car){
    if(car.carId==100)
    {
      this.toastrService.error("Hata","Bu urun eklenemez")
    }
    else
    {
      this.toastrService.success("Sepete eklendi",car.carName)

    }
  }

}
