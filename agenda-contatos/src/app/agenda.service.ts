import { Injectable } from '@angular/core';
import { Contato } from './contato.model';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contatos: Contato[] = [];

  adicionarContato(contato: Contato): void {
    this.contatos.push(contato);
  }

  obterContatos(): Contato[] {
    return this.contatos;
  }

  obterContatosFavoritos(): Contato[] {
    return this.contatos.filter((contato) => contato.favorito);
  }
  // marcarComoFavorito(id: number): void {
  //   const contato = this.contatos.find((c) => c.id === id);
  //   if (contato) {
  //     contato.favorito = true;
  //   }
  // }
}
