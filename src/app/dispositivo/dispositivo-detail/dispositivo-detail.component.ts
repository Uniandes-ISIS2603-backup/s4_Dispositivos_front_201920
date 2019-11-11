import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DispositivoService } from '../dispositivo.service';
import { DispositivoDetail } from '../dispositivo-detail';

@Component({
  selector: 'app-dispositivo-detail',
  templateUrl: './dispositivo-detail.component.html',
  styleUrls: ['./dispositivo-detail.component.css']
})
export class DispositivoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dispositivoService: DispositivoService) { }


  @Input() dispositivoDetail: DispositivoDetail;

  loader: any;

  /**
   * Id del dispositivo en dispositivos/id
   */
  dispositivoId: Number


  getDispositivoDetail(): void {
    this.dispositivoService.getDispositivoDetail(this.dispositivoId).subscribe(disp => {
      this.dispositivoDetail = disp;
    })
  }

  onLoad(params) {
    this.dispositivoId = parseInt(params["id"]);
    this.dispositivoDetail = new DispositivoDetail();
    this.getDispositivoDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy(){
    this.loader.unsusbsribe()
  }

}
