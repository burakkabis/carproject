import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.css'
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService){}

  ngOnInit(): void {
    
    this.createCarAddForm()
  }

  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required],
      unitsInStock:["",Validators.required],


    })

  }


  add(){
    if(this.carAddForm.valid){
         let carModule= Object.assign({},this.carAddForm.value) 
         this.carService.add(carModule).subscribe(response=>{
          console.log(removeEventListener)
          this.toastrService.success(response.message,"başarılı")
         },responseError=>{
          if(responseError.error.Errors.lenght>0){
            for (let i =0; i < responseError.error.Errors.lenght;i++ ) {
               this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
            }
          }
         })
         
    }else{
      this.toastrService.error("Formunuz eksik","dikkat")
    }


  }

}
