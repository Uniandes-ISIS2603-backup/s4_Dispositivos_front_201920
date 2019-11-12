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

  getDispositivos(): void {
    this.dispositivoService.getDispositivos().subscribe(dispositivos => {
      this.dispositivos = dispositivos;
    });
  }

  

  ngOnInit() {
    this.getDispositivos();
  }

}
