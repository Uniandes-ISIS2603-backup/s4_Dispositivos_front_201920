import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Marca} from '../../marca/marca';
import {MarcaService} from '../../marca/marca.service';
@Component({
    selector: 'app-marca-list',
    templateUrl: './marca-list.component.html',
    styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

    /**
    * The list of marcas to display
    */
    @Input() marcas: Marca[];

    /**
    * The component's constructor
    */
    constructor(private marcaService: MarcaService, private route: ActivatedRoute) {}

    allmarcas: string = 'no';
    /**
    * This method retrieves all the marcas in the Marcastore to show them in the list
    */
    getMarcas(): void {
        this.marcaService.getMarcas()
            .subscribe(marcas => {
                this.marcas = marcas;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allmarcas)
            .subscribe(params => {
                console.log(params);

                this.allmarcas = params.allmarcas;
                console.log(this.allmarcas);
            });
        if (this.allmarcas == 'yes') {
            console.log("allmarcas");

            this.getMarcas();
        }
    }

}
