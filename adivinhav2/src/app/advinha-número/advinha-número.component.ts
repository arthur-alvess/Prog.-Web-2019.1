import { AdvinhaService } from './advinha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-num',
  templateUrl: './advinha-número.component.html',
  styleUrls: ['./advinha-número.component.css'],
  providers: [AdvinhaService]
})
export class AdvinhaNúmeroComponent implements OnInit {
  palpite: number;
  gerado:  number;

  constructor(private adv: AdvinhaService) {
  }

  ngOnInit() {
    this.gerado = this.adv.gerarNumero(1, 20);
  }

  obterResultado() {
    return this.adv.compararPalpite(this.palpite);
  }
}
