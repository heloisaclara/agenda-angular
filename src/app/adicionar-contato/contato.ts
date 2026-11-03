import { email } from "@angular/forms/signals";

export type TipoContato = 'Amigo'|'Família'|'Trabalho'|'Outro';

export class Contato {
    nome: string 
    telefone: number
    email: string 
    aniversario: string 
    tipo: TipoContato 
}