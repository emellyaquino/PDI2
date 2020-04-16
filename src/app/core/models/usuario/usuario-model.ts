import { Tipo } from './tipo-model';
import { Genero } from './genero-model';

export class Usuario {
    id: number;
    nome: string;
    tipo: Tipo;
    genero: Genero;
    dataNascimento: Date;
    observacao: string;
    inativo: boolean;
}
