import { Component, OnInit, Input } from '@angular/core';
import { Dispositivo } from '../dispositivo';
import { CarouselModule } from 'primeng/carousel';
import { DispositivoService } from '../dispositivo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //**********************************************************
  //****** Ejemplo de como implementar Owl en Component ******
  //**********************************************************

  // title = "OwlCarousel"
  // Images = [
  //  'https://cdn0.iconfinder.com/data/icons/shopping-cart-26/1000/Shopping-Basket-03-512.png', 
  //  'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png', 
  //  'https://image.flaticon.com/icons/svg/60/60992.svg'

  // ]

  // SlideOptions = {items: 2, dots : true, nav : true }; 
  // CarouselOptions = {items:3, dots: true, nav : true};

  //*****************************************************

  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) {}

  @Input()
  dispositivos: Dispositivo[]; 

  @Input()
  sellers: Dispositivo[]; 
 

  getDispositivos():void{
    this.dispositivoService.getDispositivos().subscribe(dispositivos =>{
      this.dispositivos = dispositivos; 
    }); 
  }

  getSellers(): void{
    for(let i = 0; i < 4; i++){
      this.sellers[i] = this.dispositivos[i];   
    }
    console.log("Sip"); 
  }

  SlideOptions = {items: 2, dots: true, nav: true}; 
  CarouselOptions = {items: 3, dots: true, nav: true};

  


  ngOnInit() {
    this.getDispositivos(); 
  }
 

}
