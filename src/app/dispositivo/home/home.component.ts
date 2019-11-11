import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../dispositivo';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responsiveOptions;

  constructor() {

    
  }

  ngOnInit() {
  }

  dispositivos: Dispositivo[] = [
    new Dispositivo(1, 'Motorola', 300, 'https://falabella.scene7.com/is/image/FalabellaCO/4183452_1?$producto308$&wid=800&hei=800&qlt=70'),
    new Dispositivo(3, "Samsung", 400, ""),
    new Dispositivo(4, "Apple", 400, ""),
    new Dispositivo(5, "Asus", 400, "")
  ]

}
