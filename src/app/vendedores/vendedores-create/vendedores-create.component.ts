import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { VendedoresService } from '../vendedores.service';
import { Vendedor } from '../vendedor';

@Component({
  selector: 'app-vendedores-create',
  templateUrl: './vendedores-create.component.html',
  styleUrls: []
})
export class VendedoresCreateComponent implements OnInit {
  vendedorForm: FormGroup; 

  constructor
  (private vendedorService: VendedoresService, private formBuilder: FormBuilder) 
  { 
    this.vendedorForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(3)]],
      cedula: ["", Validators.required]
    });
  }

  ngOnInit() 
  {

  }

  createVendedor(newVendedor: Vendedor) {
    // Process checkout data here
    console.warn("Sie sind wie ein Verkäufer registriert", newVendedor);
    this.vendedorService.createVendedor(newVendedor);
   this.vendedorForm.reset();
  }

}