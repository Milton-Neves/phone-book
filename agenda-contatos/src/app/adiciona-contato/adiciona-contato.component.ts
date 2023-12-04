// adiciona-contato.component.ts
import { Component } from '@angular/core';
import { Contato, TipoContato } from '../contatos/contatos.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adiciona-contato.component.html',
  styleUrl: './adiciona-contato.component.scss'
})
export class AdicionaContatoComponent {

}
