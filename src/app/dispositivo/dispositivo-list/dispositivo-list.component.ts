import { Component, OnInit, Input } from '@angular/core';
import { DispositivoService } from '../dispositivo.service';
import { Dispositivo } from '../dispositivo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dispositivo-list',
  templateUrl: './dispositivo-list.component.html',
  styleUrls: ['./dispositivo-list.component.css']
})
export class DispositivoListComponent implements OnInit {

  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) { }

  @Input()
  dispositivos: Dispositivo[];
  arr: String[];

  getDispositivos(): void {
    this.dispositivoService.getDispositivos().subscribe(dispositivos => {
      this.dispositivos = dispositivos;
    });
  }

  getImage(): String {
    this.arr = ['https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/i/m/img_3742.jpg','https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2897221.jpg','https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8801643733629_5.jpg','https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/8801643323752-1.jpg','https://falabella.scene7.com/is/image/FalabellaCO/3923441_1?$producto308$&wid=800&hei=800&qlt=70'];
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }

  ngOnInit() {
    this.getDispositivos();
  }

}
