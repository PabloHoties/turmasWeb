import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { config } from '../environments/environment';

@Component({
  selector: 'app-cadastro-turmas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-turmas.component.html',
  styleUrl: './cadastro-turmas.component.css'
})
export class CadastroTurmasComponent implements OnInit {

  // Atributos
  professores: any[] = [];
  mensagem: string ='';

  // Método construtor
  constructor(
    private httpClient: HttpClient
  ){
  }

  //Método executado quando o componente é aberto
  ngOnInit(): void {
    this.httpClient.get(config.apiUrl + '/professores')
    .subscribe({
      next: (data) => {
        this.professores = data as any[];
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  // Estrutura do formulário
  form = new FormGroup({
    /* campo'nome' */
    nome: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(100)
    ]),
    /* campo 'dataInicio' */
    dataInicio: new FormControl('', [
      Validators.required, Validators.pattern('(?:0[1-9]|1[0-9]|2[0-9]|3[01])\\/(?:0[1-9]|1[012])\\/(?:19|20)\\d{2}')
    ]),
    /* campo 'dataTermino' */
    dataTermino: new FormControl('', [
      Validators.required, Validators.pattern('(?:0[1-9]|1[0-9]|2[0-9]|3[01])\\/(?:0[1-9]|1[012])\\/(?:19|20)\\d{2}')
    ]),
    /* campo 'idProfessor' */
    idProfessor: new FormControl('', [
      Validators.required
    ])
  });

  // Função para auxiliar a exibição das mensagens de erro na validação
  get f() {
    return this.form.controls;
  }

  //função para capturar o evento SUBMIT do formulário
  onSubmit() : void {
    // Enviando uma requisição POST para cadastrar a turma na API
    this.httpClient.post(config.apiUrl + '/turmas',
      this.form.value,
      { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.mensagem = data; // Exibir a mensagem obtida na API
          this.form.reset(); // Limpar os campos do formulário
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }

}
