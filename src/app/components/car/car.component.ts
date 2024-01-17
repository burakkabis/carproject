import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  car={carId:1,carName:"BMW",brandId:1,unitPrice:20000};
  car1={carId:2,carName:"TOGG",brandId:2,unitPrice:30000};
  car2={carId:3,carName:"AUDI",brandId:3,unitPrice:40000};
  car3={carId:4,carName:"FERRAI",brandId:4,unitPrice:50000};
  
  cars=[this.car,this.car1,this.car2,this.car3];
}
