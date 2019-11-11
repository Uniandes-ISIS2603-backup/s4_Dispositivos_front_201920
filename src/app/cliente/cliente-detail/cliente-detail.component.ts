import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';

@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the factura to be shown
    * @param clienteService The cliente's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService 
) { }    

    /**
    * The cliente
    */
    @Input() clienteDetail: ClienteDetail;

    loader:any;
    
    /**
    * El id del cliente que viene en el path get .../clientes/cliente_id
    */
   cliente_id: number;

 
   getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id).subscribe(o => {
      this.clienteDetail = o;
    });
  }

  onLoad(params) {
    this.cliente_id = parseInt(params["id"]);
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}
