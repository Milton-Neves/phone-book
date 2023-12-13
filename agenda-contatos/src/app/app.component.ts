import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { ExibeContatosComponent } from './exibe-contatos/exibe-contatos.component';
import { ExibeFavoritosComponent } from './exibe-favoritos/exibe-favoritos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AdicionaContatoComponent,
    ExibeContatosComponent,
    ExibeFavoritosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nova-agenda';
}
