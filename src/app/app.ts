import { Component, signal } from '@angular/core';
import { AdicionarContato } from './adicionar-contato/adicionar-contato';

@Component({
  imports: [AdicionarContato],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Agenda');
}
