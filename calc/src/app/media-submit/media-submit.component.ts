import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-submit',
  templateUrl: './media-submit.component.html',
  styleUrls: ['./media-submit.component.css']
})
export class MediaSubmitComponent implements OnInit {
  _nota1: number;
  _nota2: number;
  _media: number;
  _mediaCalculada: boolean;

  constructor() {
    this._nota1 = 0.0;
    this._nota2 = 0.0;
    this._media = 0.0;
    this._mediaCalculada = false;
  }

  ngOnInit() {
  }

  calcularMedia(n1: number, n2: number) {
    this._media = (n1 * 2 + n2 * 3) / 5;
    this._mediaCalculada = true;
  }

  calcularMedia2() {
    this._media =  (this._nota1 * 2 + this._nota2 * 3) / 5;
    this._mediaCalculada = true;
  }

}
