import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UbicacionService } from '../servicios/ubicacion.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(private ubicacionService: UbicacionService, private _route: ActivatedRoute, private sanitizer: DomSanitizer) {

    
  }

  mLat = 0;
  mLon = 0;

  urlLat = 0;
  urlLon = 0;

  url = null;

  ngOnInit() {

    this.urlLat = Number(this._route.snapshot.paramMap.get('lat'));
    this.urlLon = Number(this._route.snapshot.paramMap.get('lon'));
    this.mLat = Number(this._route.snapshot.paramMap.get('mLat'));
    this.mLon = Number(this._route.snapshot.paramMap.get('mLon'));

    
    var nL = "https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d3976.4833079092705!2d-74.1571235!3d4.6857468!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d" + this.mLat + "!2d" + this.mLon + "!4m3!3m2!1d" + this.urlLat + "!2d" + this.urlLon + "!5e0!3m2!1ses!2sco!4v1571969926381!5m2!1ses!2sco"

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(nL);
  }

  cambiarURL() {
    alert()
  }

}
