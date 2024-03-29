import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { Car } from '../../models/car';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[]

  constructor(private cartService:CartService,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems=this.cartService.list()
  }
  removeFromCart(car:Car)
  {
    this.cartService.removeFromCart(car);
    this.toastrService.error("Silindi",car.carName+"sepetten silindi")
  }
}
