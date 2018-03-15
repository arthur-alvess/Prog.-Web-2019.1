import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-bimestral',
  templateUrl: './media-bimestral.component.html',
  styleUrls: ['./media-bimestral.component.css']
})
export class MediaBimestralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calcularMedia(n1: number, n2: number) {
    console.log((n1 * 2 + n2 * 2) / 5);
  }
}
