// contatos.model.ts
export enum ContactType {
  Trabalho = 'Trabalho',
  Familia = 'Familia',
  Amigo = 'Amigo',
  Outro = 'Outro',
}

export interface Contact {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  aniversario: string;
  tipo: ContactType;
  favorite: boolean;
}
