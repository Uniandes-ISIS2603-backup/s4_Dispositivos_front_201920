import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Vendedor } from '../vendedor';
import { VendedoresService } from '../vendedores.service';

@Component({
  selector: 'app-vendedores-list',
  templateUrl: './vendedores-list.component.html',
  styleUrls: []
})
export class VendedoresListComponent implements OnInit {
  
  constructor(
    private vendedoresService: VendedoresService,
    private router: Router
    ) { }

  vendedores: Vendedor[]; 

  getVendedores(): void {
        this.vendedoresService.getVendedores().subscribe(vendedores => this.vendedores = vendedores);
  }
  
  ngOnInit() {
    this.getVendedores();
  }
}