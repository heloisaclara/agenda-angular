import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  imports: [],
  selector: 'app-adicionar-contato',
  styleUrl: './adicionar-contato.scss',
  templateUrl: './adicionar-contato.html',
})
export class AdicionarContato {
  contatos: Contato[] = [];
  adicionar(nomeRecebido: string, telefoneRecebido: string, tipoRecebido: any){
    const novoContato = new Contato(nomeRecebido, telefoneRecebido, tipoRecebido);
    this.contatos.push(novoContato);
  }
}
