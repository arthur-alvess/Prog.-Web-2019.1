import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {
  cadastrados: string[];
  corLista: string;

  constructor() {
    this.cadastrados = [];
    this.corLista = '#f00';
  }

  ngOnInit() {

  }

  existeAluno(): boolean {
    if (this.cadastrados.length > 0) {
      return true;
    }
    return false;
  }



  adicionar(a: string) {
    this.cadastrados.push(a);
  }

  remover(a) {
    let pos: number;
    for (pos = 0; pos < this.cadastrados.length; pos++) {
      if (this.cadastrados[pos] == a) {
        break;
      }
    }

    if (pos < this.cadastrados.length) {
      console.log(this.cadastrados.splice(pos, 1));
    }
  }
}
