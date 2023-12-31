import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Contato } from '../contato.model';

@Component({
  selector: 'app-exibe-favoritos',
  standalone: true,
  imports: [],
  templateUrl: './exibe-favoritos.component.html',
  styleUrl: './exibe-favoritos.component.css',
})
export class ExibeFavoritosComponent implements OnInit {
  contatosFavoritos: Contato[] = [];

  constructor(private agendaService: AgendaService) {}

  ngOnInit(): void {
    this.contatosFavoritos = this.agendaService.obterContatosFavoritos();
  }
}
