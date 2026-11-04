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
}
