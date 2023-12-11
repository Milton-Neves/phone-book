import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Contact, ContactType } from './contatos.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {
  novoContatoForm?: FormGroup;
  contatos: Contact[] = [
    {
      id: 1,
      nome: 'João',
      telefone: '123-456-7890',
      email: 'joao@email.com',
      aniversario: '1990-01-01',
      tipo: ContactType.Trabalho,
      favorite: true,
    },
    {
      id: 2,
      nome: 'Maria',
      telefone: '987-654-3210',
      email: 'maria@email.com',
      aniversario: '1990-01-01',
      tipo: ContactType.Familia,
      favorite: true,
    },
    {
      id: 3,
      nome: 'Carlos',
      telefone: '234-123-4567',
      email: 'carlos@email.com',
      aniversario: '1990-01-01',
      tipo: ContactType.Amigo,
      favorite: false,
    },
    {
      id: 4,
      nome: 'Leo',
      telefone: '123-678-7890',
      email: 'leo@email.com',
      aniversario: '1990-01-01',
      tipo: ContactType.Familia,
      favorite: false,
    },
    {
      id: 5,
      nome: 'Julia',
      telefone: '987-097-2345',
      email: 'julia@email.com',
      aniversario: '1990-01-01',
      tipo: ContactType.Amigo,
      favorite: false,
    },
    {
      id: 6,
      nome: 'Melissa',
      telefone: '345-543-4567',
      email: 'melissa@email.com',
      aniversario: '1990-01-01',
      tipo: ContactType.Outro,
      favorite: false,
    },
  ];
  constructor(private dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.novoContatoForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      aniversario: ['', Validators.required],
      tipo: [ContactType.Outro, Validators.required],
    });
  }

  toggleFavorite(contato: Contact): void {
    contato.favorite = !contato.favorite;
  }

  editContact(contato: Contact): void {
    console.log('Editando contato:', contato);
    // Lógica para editar o contato (pode ser implementada posteriormente)
  }

  deleteContact(contato: Contact): void {
    console.log('Excluindo contato:', contato);
    // Lógica para excluir o contato (pode ser implementada posteriormente)
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmar Exclusão',
        message: `Tem certeza que deseja excluir o contato ${contato.nome}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Lógica de exclusão aqui
        console.log('Excluindo contato:', contato);
      }
    });
  }

  adicionarContato(): void {
    if (this.novoContatoForm?.valid) {
      const novoContato: Contact = {
        id: this.contatos.length + 1,
        nome: this.novoContatoForm?.value.nome,
        telefone: this.novoContatoForm?.value.telefone,
        email: this.novoContatoForm?.value.email,
        aniversario: this.novoContatoForm?.value.aniversario,
        tipo: this.novoContatoForm?.value.tipo,
        favorite: false,
      };

      this.contatos.push(novoContato);
      this.resetForm();
    } else {
      console.log('Preencha todos os campos obrigatórios.');
    }
  }

  private resetForm(): void {
    this.novoContatoForm?.reset({
      tipo: ContactType.Outro,
    });
  }
}
