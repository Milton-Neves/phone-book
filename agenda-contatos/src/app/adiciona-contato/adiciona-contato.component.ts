import { Component } from '@angular/core';
import { Contato, TipoContato } from '../contato.model';
import { AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [],
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.css',
})
export class AdicionaContatoComponent {
  novoContato: Contato = new Contato('', '', '', '', TipoContato.Outro);

  constructor(private agendaService: AgendaService) {}

  adicionarContato(): void {
    this.agendaService.adicionarContato(this.novoContato);
    this.novoContato = new Contato('', '', '', '', TipoContato.Outro);
  }
}
