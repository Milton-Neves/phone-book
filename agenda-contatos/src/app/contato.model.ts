// contato.model.ts
export enum TipoContato {
  Amigo = 'Amigo(a)',
  Familia = 'Família',
  Trabalho = 'Trabalho',
  Outro = 'Outro',
}

export class Contato {
  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _aniversario: string; // ou Date se preferir
  private _tipo: TipoContato;
  private _favorito: boolean;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    aniversario: string,
    tipo: TipoContato
  ) {
    this._nome = nome;
    this._telefone = telefone;
    this._email = email;
    this._aniversario = aniversario;
    this._tipo = tipo;
    this._favorito = false; // Inicialmente, não é favorito
  }

  // Métodos para acessar e modificar os atributos
  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(telefone: string) {
    this._telefone = telefone;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get aniversario(): string {
    return this._aniversario;
  }

  set aniversario(aniversario: string) {
    this._aniversario = aniversario;
  }

  get tipo(): TipoContato {
    return this._tipo;
  }

  set tipo(tipo: TipoContato) {
    this._tipo = tipo;
  }

  get favorito(): boolean {
    return this._favorito;
  }

  set favorito(favorito: boolean) {
    this._favorito = favorito;
  }
}
