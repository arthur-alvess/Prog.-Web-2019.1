import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-bimestral',
  templateUrl: './media-bimestral.component.html',
  styleUrls: ['./media-bimestral.component.css']
})
export class MediaBimestralComponent implements OnInit {

  _media: number;
  _mediaCalculada: boolean;

  constructor() {
    this._media = 0.0;
    this._mediaCalculada = false;
  }

  ngOnInit() {
  }

  calcularMedia(n1: number, n2: number) {
    this._media = (n1 * 2 + n2 * 3) / 5;
    this._mediaCalculada = true;
  }
}
