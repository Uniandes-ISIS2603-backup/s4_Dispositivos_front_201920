import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { VendedorDetail } from '../vendedor-detail';
import { Vendedor } from '../vendedor';
import { VendedoresService } from '../vendedores.service';

@Component({
  selector: 'app-vendedores-detail',
  templateUrl: './vendedores-detail.component.html',
  styleUrls: []
})
export class VendedoresDetailComponent implements OnInit {

  constructor(
    private vendedoresService: VendedoresService,
    private route: ActivatedRoute) 
    { }

  vendedorDetail: VendedorDetail; 

  @Input() vendedor_cedula: number;

  loader: any;

  getVendedorDetail(): void {
        this.vendedoresService.getVendedorDetail(this.vendedor_cedula).subscribe(o => {this.vendedorDetail = o});
  }

  onLoad(params)
  {
    this.vendedor_cedula = parseInt(params['id']);
    console.log(" en detail " + this.vendedor_cedula);
    this.vendedorDetail = new VendedorDetail();
    this.getVendedorDetail();
  }
  
  ngOnInit() {
    this.loader = this.route.params.subscribe((params : Params) => this.onLoad(params));
  }

  ngOnDestroy()
  {
    this.loader.unsubscribe();
  }
}