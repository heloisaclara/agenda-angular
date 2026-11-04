export type TipoContato = 'Amigo(a)'|'Família'|'Trabalho'|'Outro';

export class Contato {
    nome: string 
    telefone: number
    email: string | undefined 
    aniversario: string | undefined 
    tipo: TipoContato 

    constructor(nm: string, tel: number, tipo: TipoContato = 'Amigo(a)') {
        this.nome = nm;
        this.telefone = tel;
        this.tipo = tipo;
    }
}