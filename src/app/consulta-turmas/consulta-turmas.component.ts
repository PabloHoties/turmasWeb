import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { config } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-turmas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-turmas.component.html',
  styleUrl: './consulta-turmas.component.css'
})
export class ConsultaTurmasComponent implements OnInit {

  turmas: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get(config.apiUrl + '/turmas')
      .subscribe({
        next: (data) => {

          this.turmas = data as any[];
        },
        error: (e) => {

          console.log(e.error);
        }
      })
  }

  onDelete(id: string) : void {

    if(confirm('Deseja realmente excluir a turma selecionada?')) {

      this.httpClient.delete(config.apiUrl + '/turmas/' + id,
        { responseType: 'text' })
        .subscribe({
          next: (data) => {
            this.mensagem = data;
            this.ngOnInit();
          },
          error: (e) => {
            console.log(e.error);
          }
        })
    }
  }

  onEdit(id: string): void {
    this.router.navigate(['/turmas-edicao', id]);
  }
}