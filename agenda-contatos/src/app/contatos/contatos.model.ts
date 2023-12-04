// contatos.model.ts
export type ContactType = 'Amigo(a)' | 'Família' | 'Trabalho' | 'Outro';

export interface Contact {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  aniversario: string;
  tipo: ContactType;
  favorite: boolean;
}

