import { AdivinhaService } from './adivinha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-num',
  templateUrl: './adivinha-numero.component.html',
  styleUrls: ['./adivinha-numero.component.css'],
  providers: [AdivinhaService]
})
export class AdivinhaNumeroComponent implements OnInit {
  palpite: number;
  gerado:  number;

  constructor(private adv: AdivinhaService) {
  }

  ngOnInit() {
    this.gerado = this.adv.gerarNumero(1, 20);
  }

  obterResultado() {
    return this.adv.compararPalpite(this.palpite);
  }
}
