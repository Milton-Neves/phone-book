import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato.model';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [],
  templateUrl: './exibe-contatos.component.html',
  styleUrl: './exibe-contatos.component.css',
})
export class ExibeContatosComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private agendaService: AgendaService) {
    this.contatos = this.agendaService.obterContatos();
  }

  ngOnInit(): void {
    // this.contatos = this.agendaService.obterContatos();
  }
}
