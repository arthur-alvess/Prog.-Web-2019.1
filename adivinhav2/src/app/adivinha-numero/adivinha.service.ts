import { Injectable } from '@angular/core';

@Injectable()
export class AdivinhaService {
  private gerado: number;

  constructor() {
    this.gerado = 0;
  }

  gerarNumero(ini: number, fim: number): number {
    this.gerado = Math.floor(Math.random() * (fim - ini + 1)) + ini;
    return this.gerado;
  }

  compararPalpite(palpite: number): number {
    if (palpite === this.gerado) {
      return 0;
    } else if (palpite < this.gerado) {
      return -1;
    } else if (palpite > this.gerado) {
      return 1;
    }
  }

}
