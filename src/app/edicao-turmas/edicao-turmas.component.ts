import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { config } from '../environments/environment';

@Component({
  selector: 'app-edicao-turmas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edicao-turmas.component.html',
  styleUrl: './edicao-turmas.component.css'
})
export class EdicaoTurmasComponent {

  professores: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ){}

  form = new FormGroup({
    id: new FormControl('',),
    nome: new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(100)
    ]),
    dataInicio: new FormControl('', [
      Validators.required, Validators.pattern('(?:0[1-9]|1[0-9]|2[0-9]|3[01])\\/(?:0[1-9]|1[012])\\/(?:19|20)\\d{2}')
    ]),
    dataTermino: new FormControl('', [
      Validators.required, Validators.pattern('(?:0[1-9]|1[0-9]|2[0-9]|3[01])\\/(?:0[1-9]|1[012])\\/(?:19|20)\\d{2}')
    ]),
    idProfessor: new FormControl('', [
      Validators.required
    ])
  });

  get f() {
    return this.form.controls;
  }

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

    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get(config.apiUrl + "/turmas/" + id)
      .subscribe({
        next: (data: any) => {
          this.form.controls['id'].setValue(data.id);
          this.form.controls['nome'].setValue(data.nome);
          this.form.controls['dataInicio'].setValue(data.dataInicio);
          this.form.controls['dataTermino'].setValue(data.dataTermino);
          this.form.controls['idProfessor'].setValue(data.professor.id);
        },
        error: (e) => {
          console.log(e.erro);
        }
      })
  }

  onSubmit() : void {
    this.httpClient.put(config.apiUrl + "/turmas", this.form.value,
      { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.mensagem = data;
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }
}
