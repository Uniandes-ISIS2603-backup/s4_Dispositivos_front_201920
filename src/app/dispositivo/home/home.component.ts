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

}
