import { Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { ContatosDetalhesComponent } from './contatos-detalhes/contatos-detalhes.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';

export const routes: Routes = [
    { path: '', redirectTo: '/agenda', pathMatch: 'full' },
    { path: 'agenda', component: ContatosComponent },
];
