import { Component } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

 
  cars:Car[]=[];
}
