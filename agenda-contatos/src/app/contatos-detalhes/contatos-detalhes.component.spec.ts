import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosDetalhesComponent } from './contatos-detalhes.component';

describe('ContatosDetalhesComponent', () => {
  let component: ContatosDetalhesComponent;
  let fixture: ComponentFixture<ContatosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatosDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
