import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { AgendaService } from './agenda.service';

import { routes } from './app.routes';
import { ExibeContatosComponent } from './exibe-contatos/exibe-contatos.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    AgendaService,
    AdicionaContatoComponent,
    ExibeContatosComponent,
  ],
};
