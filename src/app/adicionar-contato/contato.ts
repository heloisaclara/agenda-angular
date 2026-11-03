import { email } from "@angular/forms/signals";

export type TipoContato = 'Amigo(a)'|'Família'|'Trabalho'|'Outro';

export class Contato {
    nome: string 
    telefone: number
    email: string 
    aniversario: string 
    tipo: TipoContato 

    constructor(nm: string, tel: number, tipo: TipoContato = 'Amigo(a)') {
        this.nome = nm;
        this.telefone = tel;
        this.tipo = tipo;
    }
}